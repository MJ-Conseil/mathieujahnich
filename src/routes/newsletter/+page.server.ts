import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { FRIENDLY_CAPTCHA_API_KEY, SENDINBLUE_API_KEY } from '$env/static/private';
import { PUBLIC_FRIENDLY_CAPTCHA_KEY } from '$env/static/public';

/**
 * Friendly Captcha siteverify endpoint (v2 API).
 * The widget uses the "global" endpoint by default, so the response must be
 * verified against the same endpoint.
 * See: https://developer.friendlycaptcha.com/docs/v2/api/siteverify
 */
const FRC_SITEVERIFY_ENDPOINT = 'https://global.frcapi.com/api/v2/captcha/siteverify';

/** Maximum size accepted by the siteverify API for the captcha response. */
const FRC_RESPONSE_MAX_LENGTH = 16 * 1024;

type CaptchaVerificationState = 'valid' | 'invalid' | 'unchecked';

/**
 * Verifies the captcha response submitted in the "frc-captcha-response" form field.
 *
 * - "valid": the challenge was solved successfully, the request may proceed.
 * - "invalid": the response was rejected (wrong, expired, already used...). The
 *   request must be refused.
 * - "unchecked": the verification could not be performed (missing API key,
 *   Friendly Captcha unreachable, request misconfigured...). Following Friendly
 *   Captcha's recommendation we let the request through rather than blocking
 *   every user, but the cause is logged so it gets noticed and fixed.
 */
 const  verifyCaptchaResponse =  async (
	fetch: typeof globalThis.fetch,
	captchaResponse: string
): Promise<CaptchaVerificationState> => {
	if (!FRIENDLY_CAPTCHA_API_KEY) {
		console.error(
			'FRIENDLY_CAPTCHA_API_KEY is not set: newsletter captcha responses cannot be verified, the form is unprotected.'
		);
		return 'unchecked';
	}

	try {
		const response = await fetch(FRC_SITEVERIFY_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-API-Key': FRIENDLY_CAPTCHA_API_KEY
			},
			body: JSON.stringify({
				response: captchaResponse,
				sitekey: PUBLIC_FRIENDLY_CAPTCHA_KEY
			})
		});


		// 400/401 mean our request is misconfigured, 5xx means Friendly Captcha
		// is unavailable: in both cases the verification could not be performed.
		if (response.status !== 200) {
			console.error(
				`Friendly Captcha siteverify returned status ${response.status}: ${await response.text()}`
			);
			return 'unchecked';
		}

		// A 200 status only means the verification was performed, use the
		// "success" field to know whether the response was valid.
		const result = (await response.json()) as { ok?: boolean };
		return result.ok === true ? 'valid' : 'invalid';
	} catch (error) {
		console.error('Friendly Captcha siteverify request failed:', error);
		return 'unchecked';
	}
}

export const actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();

		const email = data.get('email');
		const firstname = data.get('firstname');
		const cgu = data.get('cgu');
		const captchaResponse = data.get('frc-captcha-response')?.toString().trim() ?? '';

		if (!email) {
			return fail(400, { email, missing: true });
		}

		if (!firstname) {
			return fail(400, { firstname, missing: true });
		}
		if (!cgu) {
			return fail(400, { cgu, missing: true });
		}


		if (!captchaResponse || captchaResponse.length > FRC_RESPONSE_MAX_LENGTH) {
			return fail(400, { email, firstname, captchaFailed: true });
		}

		const captchaState = await verifyCaptchaResponse(fetch, captchaResponse);
		if (captchaState === 'invalid') {
			return fail(400, { email, firstname, captchaFailed: true });
		}

		if (!SENDINBLUE_API_KEY) {
			return fail(400, { contactCreationFailed: true });
		}

		// This API call will trigger a  Brevo Double Optin registration Worflow to be GDPR compliant.
		// See : https://help.brevo.com/hc/en-us/articles/211244629

		try {
			const response = await fetch('https://api.brevo.com/v3/contacts', {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					'api-key': SENDINBLUE_API_KEY
				},

				body: JSON.stringify({
					email: email.toString(),
					attributes: {
						PRENOM: firstname.toString()
					},
					listIds: [5]
				})
			});

			console.log(await response.json());

			if (response.status !== 201) {
				return fail(400, { contactCreationFailed: true });
			}

			return { success: true };
		} catch {
			return fail(400, { contactCreationFailed: true });
		}
	}
} satisfies Actions;

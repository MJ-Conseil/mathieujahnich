import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { SENDINBLUE_API_KEY } from '$env/static/private';

export const actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();

		const email = data.get('email');
		const firstname = data.get('firstname');
		const cgu = data.get('cgu');

		if (!email) {
			return fail(400, { email, missing: true });
		}

		if (!firstname) {
			return fail(400, { firstname, missing: true });
		}
		if (!cgu) {
			return fail(400, { cgu, missing: true });
		}

		if (!SENDINBLUE_API_KEY) {
			return fail(400, { contactCreationFailed: true });
		}

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
					}
				})
			});

			if (response.status !== 201) {
				return fail(400, { contactCreationFailed: true });
			}

			return { success: true };
		} catch (error) {
			return fail(400, { contactCreationFailed: true });
		}
	}
} satisfies Actions;

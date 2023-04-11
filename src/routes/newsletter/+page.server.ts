import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import * as SibApiV3Sdk from '@sendinblue/client';
import { SENDINBLUE_API_KEY } from '$env/static/private';
import { transformRawEmailCampaignToEmailCampaign } from '$lib/transformers/emailCampaigns';

export const actions = {
	default: async ({ request }) => {
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

		const apiInstance = new SibApiV3Sdk.ContactsApi();

		if (!SENDINBLUE_API_KEY) {
			return fail(400, { contactCreationFailed: true });
		}

		apiInstance.setApiKey(SibApiV3Sdk.ContactsApiApiKeys.apiKey, SENDINBLUE_API_KEY);

		const createContact = new SibApiV3Sdk.CreateContact();

		createContact.email = email.toString();
		createContact.attributes = {
			PRENOM: firstname.toString()
		};

		try {
			await apiInstance.createContact(createContact);
			return { success: true };
		} catch (error) {
			return fail(400, { contactCreationFailed: true });
		}
	}
} satisfies Actions;

export const load: PageServerLoad = async () => {
	const apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
	apiInstance.setApiKey(SibApiV3Sdk.EmailCampaignsApiApiKeys.apiKey, SENDINBLUE_API_KEY);
	const type = 'classic';
	const status = 'sent';
	const limit = 5;
	const offset = 0;

	try {
		const results = await apiInstance.getEmailCampaigns(
			type,
			status,
			undefined,
			undefined,
			undefined,
			limit,
			offset
		);
		const campaigns = results.body.campaigns
			?.filter((item) => item.name.match(new RegExp('^News')))
			.map(transformRawEmailCampaignToEmailCampaign);

		return { campaigns };
	} catch (error) {
		console.log(error);
	}
};

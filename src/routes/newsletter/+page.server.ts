import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import * as SibApiV3Sdk from '@sendinblue/client';
import { SENDINBLUE_API_KEY } from '$env/static/private';

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

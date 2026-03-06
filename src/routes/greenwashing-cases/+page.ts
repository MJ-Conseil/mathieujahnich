import type { QueryOption } from 'definitions';
import type { PageLoad } from './$types';
import { getGreenWhasingCasesTypes } from '$lib/repositories/greenWashingCaseTypes';
import { getGreenWhasingCases } from '$lib/repositories/greenWashingCases';

export const load: PageLoad = async ({ fetch }) => {
	const params: QueryOption = {
		page: 1,
		per_page: 10,
		highlight: 0
	};

	const [greenWashingCaseTypes, grennWashingCases] = await Promise.all([
		getGreenWhasingCasesTypes(fetch),
		getGreenWhasingCases(fetch, params)
	]);

	return { greenWashingCaseTypes, grennWashingCases };
};

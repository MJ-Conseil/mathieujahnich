import type { EmailCampain } from 'src/definitions';

export const transformRawEmailCampaignToEmailCampaign = (rawEmailCampaign: any): EmailCampain => {
	return {
		id: rawEmailCampaign.id,
		content: rawEmailCampaign.htmlContent,
		name: rawEmailCampaign.name
	};
};

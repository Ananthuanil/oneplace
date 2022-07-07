import { Opportunity as TOpportunity } from "../api/opportunity/Opportunity";

export const OPPORTUNITY_TITLE_FIELD = "name";

export const OpportunityTitle = (record: TOpportunity): string => {
  return record.name || record.id;
};

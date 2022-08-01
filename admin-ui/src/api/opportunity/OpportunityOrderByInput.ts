import { SortOrder } from "../../util/SortOrder";

export type OpportunityOrderByInput = {
  claimedPersonId?: SortOrder;
  createdAt?: SortOrder;
  currentStatus?: SortOrder;
  id?: SortOrder;
  mappedPersonId?: SortOrder;
  name?: SortOrder;
  partnerId?: SortOrder;
  requiredExperience?: SortOrder;
  requirements?: SortOrder;
  source?: SortOrder;
  updatedAt?: SortOrder;
  winOdds?: SortOrder;
};

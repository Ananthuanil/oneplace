import { SortOrder } from "../../util/SortOrder";

export type OpportunityOrderByInput = {
  claimedPersonId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  mappedPersonId?: SortOrder;
  name?: SortOrder;
  partnerId?: SortOrder;
  requiredExperience?: SortOrder;
  requirements?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};

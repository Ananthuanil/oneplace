import { SortOrder } from "../../util/SortOrder";

export type OpportunityOrderByInput = {
  claimedPersonId?: SortOrder;
  createdAt?: SortOrder;
  currentStatus?: SortOrder;
  id?: SortOrder;
  mappedCandidatesId?: SortOrder;
  mappedEmployeeId?: SortOrder;
  name?: SortOrder;
  partnerId?: SortOrder;
  procurementStatus?: SortOrder;
  projectId?: SortOrder;
  requiredExperience?: SortOrder;
  requirements?: SortOrder;
  resumeId?: SortOrder;
  source?: SortOrder;
  updatedAt?: SortOrder;
  winOdds?: SortOrder;
};

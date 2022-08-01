import { SortOrder } from "../../util/SortOrder";

export type SkillOrderByInput = {
  candidateId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  opportunityId?: SortOrder;
  updatedAt?: SortOrder;
};

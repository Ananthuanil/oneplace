import { SortOrder } from "../../util/SortOrder";

export type SkillOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  opportunityId?: SortOrder;
  oppurtunatyRequiredSkillsId?: SortOrder;
  updatedAt?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type SkillLevelOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  interviewId?: SortOrder;
  level?: SortOrder;
  skillId?: SortOrder;
  updatedAt?: SortOrder;
};

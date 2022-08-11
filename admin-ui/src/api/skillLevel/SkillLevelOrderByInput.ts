import { SortOrder } from "../../util/SortOrder";

export type SkillLevelOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  interviewFeedbackId?: SortOrder;
  level?: SortOrder;
  skillId?: SortOrder;
  updatedAt?: SortOrder;
};

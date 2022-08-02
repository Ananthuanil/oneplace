import { SortOrder } from "../../util/SortOrder";

export type SkillSetOrderByInput = {
  candidateId?: SortOrder;
  createdAt?: SortOrder;
  expertiseLevel?: SortOrder;
  id?: SortOrder;
  interviewFeedbackId?: SortOrder;
  skillId?: SortOrder;
  updatedAt?: SortOrder;
};

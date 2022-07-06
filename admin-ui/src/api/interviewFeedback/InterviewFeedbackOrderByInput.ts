import { SortOrder } from "../../util/SortOrder";

export type InterviewFeedbackOrderByInput = {
  attitudeFeedback?: SortOrder;
  comments?: SortOrder;
  communicationId?: SortOrder;
  createdAt?: SortOrder;
  feedback?: SortOrder;
  id?: SortOrder;
  interviewId?: SortOrder;
  logicFeedback?: SortOrder;
  relevantTechFeedback?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};

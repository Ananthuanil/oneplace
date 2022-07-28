import { SortOrder } from "../../util/SortOrder";

export type InterviewOrderByInput = {
  candidateId?: SortOrder;
  closed?: SortOrder;
  createdAt?: SortOrder;
  currentStatus?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  interviewerId?: SortOrder;
  level?: SortOrder;
  mode?: SortOrder;
  opportunityId?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};

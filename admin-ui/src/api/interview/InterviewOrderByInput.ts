import { SortOrder } from "../../util/SortOrder";

export type InterviewOrderByInput = {
  calendarScheduleId?: SortOrder;
  candidateId?: SortOrder;
  closed?: SortOrder;
  createdAt?: SortOrder;
  currentStatus?: SortOrder;
  date?: SortOrder;
  emailStatus?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  interviewerId?: SortOrder;
  level?: SortOrder;
  mode?: SortOrder;
  startDate?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};

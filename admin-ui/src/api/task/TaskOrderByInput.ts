import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  attendanceId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  specification?: SortOrder;
  status?: SortOrder;
  ticketId?: SortOrder;
  ticketLink?: SortOrder;
  ticketName?: SortOrder;
  updatedAt?: SortOrder;
};

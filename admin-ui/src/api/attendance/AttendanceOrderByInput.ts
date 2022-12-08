import { SortOrder } from "../../util/SortOrder";

export type AttendanceOrderByInput = {
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  loginTime?: SortOrder;
  logoutTime?: SortOrder;
  office?: SortOrder;
  temp?: SortOrder;
  updatedAt?: SortOrder;
  workMode?: SortOrder;
};

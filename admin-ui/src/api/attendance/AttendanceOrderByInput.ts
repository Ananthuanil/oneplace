import { SortOrder } from "../../util/SortOrder";

export type AttendanceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  loginTime?: SortOrder;
  logoutTime?: SortOrder;
  office?: SortOrder;
  updatedAt?: SortOrder;
  workMode?: SortOrder;
};

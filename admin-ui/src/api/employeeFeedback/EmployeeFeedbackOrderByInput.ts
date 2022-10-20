import { SortOrder } from "../../util/SortOrder";

export type EmployeeFeedbackOrderByInput = {
  area?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  nature?: SortOrder;
  remark?: SortOrder;
  updatedAt?: SortOrder;
};

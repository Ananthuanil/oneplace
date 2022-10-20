import { EmployeeFeedbackWhereInput } from "./EmployeeFeedbackWhereInput";
import { EmployeeFeedbackOrderByInput } from "./EmployeeFeedbackOrderByInput";

export type EmployeeFeedbackFindManyArgs = {
  where?: EmployeeFeedbackWhereInput;
  orderBy?: Array<EmployeeFeedbackOrderByInput>;
  skip?: number;
  take?: number;
};

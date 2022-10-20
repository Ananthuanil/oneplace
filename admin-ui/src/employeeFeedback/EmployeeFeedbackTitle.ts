import { EmployeeFeedback as TEmployeeFeedback } from "../api/employeeFeedback/EmployeeFeedback";

export const EMPLOYEEFEEDBACK_TITLE_FIELD = "area";

export const EmployeeFeedbackTitle = (record: TEmployeeFeedback): string => {
  return record.area || record.id;
};

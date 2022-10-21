import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmployeeFeedbackUpdateInput = {
  area?: string;
  date?: Date;
  employee?: UserWhereUniqueInput;
  nature?: "Positive" | "Negative" | "Neutral";
  remark?: string;
  reviewer?: UserWhereUniqueInput;
  test?: string | null;
};

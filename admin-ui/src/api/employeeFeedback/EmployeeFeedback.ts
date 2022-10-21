import { User } from "../user/User";

export type EmployeeFeedback = {
  area: string;
  createdAt: Date;
  date: Date;
  employee?: User;
  id: string;
  nature?: "Positive" | "Negative" | "Neutral";
  remark: string;
  reviewer?: User;
  test: string | null;
  updatedAt: Date;
};

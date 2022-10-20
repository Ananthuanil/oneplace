import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmployeeFeedbackWhereInput = {
  area?: StringFilter;
  date?: DateTimeFilter;
  employee?: UserWhereUniqueInput;
  id?: StringFilter;
  nature?: "Positive" | "Negative" | "Neutral";
  remark?: StringFilter;
};

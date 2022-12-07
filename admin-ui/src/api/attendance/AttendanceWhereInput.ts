import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type AttendanceWhereInput = {
  attendanceStatus?: StringNullableFilter;
  employee?: UserWhereUniqueInput;
  id?: StringFilter;
  loginTime?: DateTimeNullableFilter;
  logoutTime?: DateTimeNullableFilter;
  office?: "mgRoad" | "infopark";
  tasks?: TaskListRelationFilter;
  temp?: StringNullableFilter;
  workMode?: "WFO" | "WFH";
};

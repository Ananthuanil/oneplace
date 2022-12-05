import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type AttendanceWhereInput = {
  attendanceStatus?: BooleanNullableFilter;
  employee?: UserWhereUniqueInput;
  id?: StringFilter;
  loginTime?: DateTimeNullableFilter;
  logoutTime?: DateTimeNullableFilter;
  office?: "mgRoad" | "infopark";
  tasks?: TaskListRelationFilter;
  workMode?: "WFO" | "WFH";
};

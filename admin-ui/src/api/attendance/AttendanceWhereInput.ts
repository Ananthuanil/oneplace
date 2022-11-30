import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type AttendanceWhereInput = {
  id?: StringFilter;
  loginTime?: StringNullableFilter;
  logoutTime?: StringNullableFilter;
  office?: "mgRoad" | "infopark";
  tasks?: TaskListRelationFilter;
  workMode?: "WFO" | "WFH";
};

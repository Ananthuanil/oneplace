import { AttendanceWhereUniqueInput } from "../attendance/AttendanceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TaskWhereInput = {
  attendance?: AttendanceWhereUniqueInput;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  specification?: StringNullableFilter;
  status?: "completed" | "iInProgress" | "blocker";
  ticketId?: StringNullableFilter;
  ticketLink?: StringNullableFilter;
  ticketName?: StringFilter;
};

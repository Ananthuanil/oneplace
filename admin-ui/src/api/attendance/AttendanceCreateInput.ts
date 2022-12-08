import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskCreateNestedManyWithoutAttendancesInput } from "./TaskCreateNestedManyWithoutAttendancesInput";

export type AttendanceCreateInput = {
  attendanceStatus?: string | null;
  employee?: UserWhereUniqueInput | null;
  loginTime?: string | null;
  logoutTime?: string | null;
  office?: "mgRoad" | "infopark" | null;
  tasks?: TaskCreateNestedManyWithoutAttendancesInput;
  temp?: string | null;
  workMode?: "WFO" | "WFH" | null;
};

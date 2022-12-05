import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskCreateNestedManyWithoutAttendancesInput } from "./TaskCreateNestedManyWithoutAttendancesInput";

export type AttendanceCreateInput = {
  attendanceStatus?: boolean | null;
  employee?: UserWhereUniqueInput | null;
  loginTime?: Date | null;
  logoutTime?: Date | null;
  office?: "mgRoad" | "infopark" | null;
  tasks?: TaskCreateNestedManyWithoutAttendancesInput;
  workMode?: "WFO" | "WFH" | null;
};

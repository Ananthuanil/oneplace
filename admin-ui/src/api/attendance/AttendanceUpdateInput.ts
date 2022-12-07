import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskUpdateManyWithoutAttendancesInput } from "./TaskUpdateManyWithoutAttendancesInput";

export type AttendanceUpdateInput = {
  attendanceStatus?: string | null;
  employee?: UserWhereUniqueInput | null;
  loginTime?: Date | null;
  logoutTime?: Date | null;
  office?: "mgRoad" | "infopark" | null;
  tasks?: TaskUpdateManyWithoutAttendancesInput;
  temp?: string | null;
  workMode?: "WFO" | "WFH" | null;
};

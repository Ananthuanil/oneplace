import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskUpdateManyWithoutAttendancesInput } from "./TaskUpdateManyWithoutAttendancesInput";

export type AttendanceUpdateInput = {
  attendanceStatus?: boolean | null;
  employee?: UserWhereUniqueInput | null;
  loginTime?: Date | null;
  logoutTime?: Date | null;
  office?: "mgRoad" | "infopark" | null;
  tasks?: TaskUpdateManyWithoutAttendancesInput;
  workMode?: "WFO" | "WFH" | null;
};

import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskUpdateManyWithoutAttendancesInput } from "./TaskUpdateManyWithoutAttendancesInput";

export type AttendanceUpdateInput = {
  employee?: UserWhereUniqueInput | null;
  loginTime?: string | null;
  logoutTime?: string | null;
  office?: "mgRoad" | "infopark" | null;
  tasks?: TaskUpdateManyWithoutAttendancesInput;
  temp?: string | null;
  workMode?: "WFO" | "WFH" | null;
};

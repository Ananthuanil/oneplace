import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskCreateNestedManyWithoutAttendancesInput } from "./TaskCreateNestedManyWithoutAttendancesInput";

export type AttendanceCreateInput = {
  employee?: UserWhereUniqueInput | null;
  loginTime?: string | null;
  logoutTime?: string | null;
  office?: "mgRoad" | "infopark" | null;
  tasks?: TaskCreateNestedManyWithoutAttendancesInput;
  workMode?: "WFO" | "WFH" | null;
};

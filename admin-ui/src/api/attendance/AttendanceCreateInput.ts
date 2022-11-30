import { TaskCreateNestedManyWithoutAttendancesInput } from "./TaskCreateNestedManyWithoutAttendancesInput";

export type AttendanceCreateInput = {
  loginTime?: string | null;
  logoutTime?: string | null;
  office?: "mgRoad" | "infopark" | null;
  tasks?: TaskCreateNestedManyWithoutAttendancesInput;
  workMode?: "WFO" | "WFH" | null;
};

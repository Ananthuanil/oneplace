import { AttendanceWhereUniqueInput } from "../attendance/AttendanceWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskUpdateInput = {
  attendance?: AttendanceWhereUniqueInput | null;
  project?: ProjectWhereUniqueInput | null;
  specification?: string | null;
  status?: "Completed" | "inProgress" | "blocker";
  ticketId?: string | null;
  ticketLink?: string | null;
  ticketName?: string;
};

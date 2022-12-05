import { User } from "../user/User";
import { Task } from "../task/Task";

export type Attendance = {
  attendanceStatus: boolean | null;
  createdAt: Date;
  employee?: User | null;
  id: string;
  loginTime: Date | null;
  logoutTime: Date | null;
  office?: "mgRoad" | "infopark" | null;
  tasks?: Array<Task>;
  updatedAt: Date;
  workMode?: "WFO" | "WFH" | null;
};

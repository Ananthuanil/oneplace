import { User } from "../user/User";
import { Task } from "../task/Task";

export type Attendance = {
  attendanceStatus: string | null;
  createdAt: Date;
  employee?: User | null;
  id: string;
  loginTime: string | null;
  logoutTime: string | null;
  office?: "mgRoad" | "infopark" | null;
  tasks?: Array<Task>;
  temp: string | null;
  updatedAt: Date;
  workMode?: "WFO" | "WFH" | null;
};

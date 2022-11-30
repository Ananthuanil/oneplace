import { User } from "../user/User";
import { Task } from "../task/Task";

export type Attendance = {
  createdAt: Date;
  employee?: User | null;
  id: string;
  loginTime: string | null;
  logoutTime: string | null;
  office?: "mgRoad" | "infopark" | null;
  tasks?: Array<Task>;
  updatedAt: Date;
  workMode?: "WFO" | "WFH" | null;
};
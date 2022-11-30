import { Attendance } from "../attendance/Attendance";
import { Project } from "../project/Project";

export type Task = {
  attendance?: Attendance | null;
  createdAt: Date;
  id: string;
  project?: Project | null;
  specification: string | null;
  status?: "Completed" | "inProgress" | "blocker";
  ticketId: string | null;
  ticketLink: string | null;
  ticketName: string;
  updatedAt: Date;
};

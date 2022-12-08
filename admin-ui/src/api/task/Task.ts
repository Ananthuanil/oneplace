import { Attendance } from "../attendance/Attendance";
import { Project } from "../project/Project";

export type Task = {
  attendance?: Attendance | null;
  createdAt: Date;
  id: string;
  project?: Project | null;
  specification: string | null;
  status?: "completed" | "iInProgress" | "blocker";
  ticketId: string | null;
  ticketLink: string | null;
  ticketName: string;
  updatedAt: Date;
};

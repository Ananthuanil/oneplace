import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "ticketName";

export const TaskTitle = (record: TTask): string => {
  return record.ticketName || record.id;
};

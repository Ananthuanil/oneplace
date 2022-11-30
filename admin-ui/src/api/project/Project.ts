import { Opportunity } from "../opportunity/Opportunity";
import { Partner } from "../partner/Partner";
import { ProjectInvolvement } from "../projectInvolvement/ProjectInvolvement";
import { Task } from "../task/Task";
import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  id: string;
  name: string | null;
  opportunities?: Array<Opportunity>;
  partner?: Partner | null;
  projectInvolvements?: Array<ProjectInvolvement>;
  startDate: Date | null;
  tasks?: Array<Task>;
  updatedAt: Date;
  users?: Array<User>;
};

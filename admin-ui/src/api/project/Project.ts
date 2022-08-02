import { Partner } from "../partner/Partner";
import { ProjectInvolvement } from "../projectInvolvement/ProjectInvolvement";
import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  id: string;
  name: string | null;
  partner?: Partner | null;
  projectInvolvements?: Array<ProjectInvolvement>;
  startDate: Date | null;
  updatedAt: Date;
  users?: Array<User>;
};

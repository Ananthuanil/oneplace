import { ClientFeedback } from "../clientFeedback/ClientFeedback";
import { Opportunity } from "../opportunity/Opportunity";
import { Partner } from "../partner/Partner";
import { ProjectInvolvement } from "../projectInvolvement/ProjectInvolvement";
import { User } from "../user/User";

export type Project = {
  clientFeedbacks?: Array<ClientFeedback>;
  createdAt: Date;
  id: string;
  name: string | null;
  opportunities?: Array<Opportunity>;
  partner?: Partner | null;
  projectInvolvements?: Array<ProjectInvolvement>;
  startDate: Date | null;
  updatedAt: Date;
  users?: Array<User>;
};

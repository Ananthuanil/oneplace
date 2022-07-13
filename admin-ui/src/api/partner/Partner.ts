import { Opportunity } from "../opportunity/Opportunity";
import { Project } from "../project/Project";

export type Partner = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  opportunities?: Array<Opportunity>;
  projects?: Array<Project>;
  updatedAt: Date;
};

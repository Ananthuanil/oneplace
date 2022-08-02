import { Project } from "../project/Project";
import { User } from "../user/User";

export type ProjectInvolvement = {
  createdAt: Date;
  id: string;
  involvementPercentage: number | null;
  project?: Project | null;
  updatedAt: Date;
  user?: User | null;
};

import { CommunityActivity } from "../communityActivity/CommunityActivity";
import { User } from "../user/User";

export type Community = {
  communityActivities?: Array<CommunityActivity>;
  communityLeads?: Array<User>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};

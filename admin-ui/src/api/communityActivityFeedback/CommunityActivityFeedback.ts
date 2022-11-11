import { CommunityActivity } from "../communityActivity/CommunityActivity";
import { User } from "../user/User";

export type CommunityActivityFeedback = {
  activity?: CommunityActivity | null;
  activityFeedback: string | null;
  attendance: boolean;
  createdAt: Date;
  employee?: User;
  id: string;
  rating: number | null;
  updatedAt: Date;
};

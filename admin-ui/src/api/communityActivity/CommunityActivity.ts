import { Community } from "../community/Community";
import { CommunityActivityFeedback } from "../communityActivityFeedback/CommunityActivityFeedback";

export type CommunityActivity = {
  community?: Community;
  communityActivityFeedbacks?: Array<CommunityActivityFeedback>;
  createdAt: Date;
  date: Date;
  description: string;
  id: string;
  title: string;
  updatedAt: Date;
};

import { CommunityActivity as TCommunityActivity } from "../api/communityActivity/CommunityActivity";

export const COMMUNITYACTIVITY_TITLE_FIELD = "title";

export const CommunityActivityTitle = (record: TCommunityActivity): string => {
  return record.title || record.id;
};

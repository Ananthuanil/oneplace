import { CommunityActivityFeedback as TCommunityActivityFeedback } from "../api/communityActivityFeedback/CommunityActivityFeedback";

export const COMMUNITYACTIVITYFEEDBACK_TITLE_FIELD = "id";

export const CommunityActivityFeedbackTitle = (
  record: TCommunityActivityFeedback
): string => {
  return record.id || record.id;
};

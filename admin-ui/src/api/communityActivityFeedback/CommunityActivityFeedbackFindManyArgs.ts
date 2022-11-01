import { CommunityActivityFeedbackWhereInput } from "./CommunityActivityFeedbackWhereInput";
import { CommunityActivityFeedbackOrderByInput } from "./CommunityActivityFeedbackOrderByInput";

export type CommunityActivityFeedbackFindManyArgs = {
  where?: CommunityActivityFeedbackWhereInput;
  orderBy?: Array<CommunityActivityFeedbackOrderByInput>;
  skip?: number;
  take?: number;
};

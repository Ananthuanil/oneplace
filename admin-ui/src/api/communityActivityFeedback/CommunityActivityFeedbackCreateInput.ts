import { CommunityActivityWhereUniqueInput } from "../communityActivity/CommunityActivityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommunityActivityFeedbackCreateInput = {
  activity?: CommunityActivityWhereUniqueInput | null;
  activityFeedback?: string | null;
  attendance: boolean;
  employee: UserWhereUniqueInput;
  rating?: number | null;
};

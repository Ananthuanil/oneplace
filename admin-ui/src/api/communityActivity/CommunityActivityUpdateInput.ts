import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { CommunityActivityFeedbackUpdateManyWithoutCommunityActivitiesInput } from "./CommunityActivityFeedbackUpdateManyWithoutCommunityActivitiesInput";

export type CommunityActivityUpdateInput = {
  community?: CommunityWhereUniqueInput;
  communityActivityFeedbacks?: CommunityActivityFeedbackUpdateManyWithoutCommunityActivitiesInput;
  date?: Date;
  description?: string;
  title?: string;
};

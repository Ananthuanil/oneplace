import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { CommunityActivityFeedbackCreateNestedManyWithoutCommunityActivitiesInput } from "./CommunityActivityFeedbackCreateNestedManyWithoutCommunityActivitiesInput";

export type CommunityActivityCreateInput = {
  community: CommunityWhereUniqueInput;
  communityActivityFeedbacks?: CommunityActivityFeedbackCreateNestedManyWithoutCommunityActivitiesInput;
  date: Date;
  description: string;
  title: string;
};

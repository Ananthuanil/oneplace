import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { CommunityActivityFeedbackListRelationFilter } from "../communityActivityFeedback/CommunityActivityFeedbackListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommunityActivityWhereInput = {
  community?: CommunityWhereUniqueInput;
  communityActivityFeedbacks?: CommunityActivityFeedbackListRelationFilter;
  date?: DateTimeFilter;
  description?: StringFilter;
  id?: StringFilter;
  title?: StringFilter;
};

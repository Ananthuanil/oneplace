import { CommunityActivityWhereUniqueInput } from "../communityActivity/CommunityActivityWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CommunityActivityFeedbackWhereInput = {
  activity?: CommunityActivityWhereUniqueInput;
  activityFeedback?: StringNullableFilter;
  attendance?: BooleanFilter;
  employee?: UserWhereUniqueInput;
  id?: StringFilter;
  rating?: FloatNullableFilter;
};

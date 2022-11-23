import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ClientFeedbackWhereInput = {
  detailedFeedback?: StringNullableFilter;
  employee?: UserWhereUniqueInput;
  id?: StringFilter;
  improvementNeeded?: StringNullableFilter;
  meetingEtiquite?: IntNullableFilter;
  organiser?: UserWhereUniqueInput;
  processGovernance?: IntNullableFilter;
  project?: StringNullableFilter;
  qualityOfDeliverables?: IntNullableFilter;
  reportingManager?: StringNullableFilter;
  reviewerEmail?: StringNullableFilter;
  reviewerName?: StringNullableFilter;
  role?: StringNullableFilter;
  status?:
    | "LinkGenerated"
    | "WaitingForFeedback"
    | "FeedbackReceived"
    | "NoResponse";
  teamWork?: IntNullableFilter;
  technicalExpertise?: IntNullableFilter;
};

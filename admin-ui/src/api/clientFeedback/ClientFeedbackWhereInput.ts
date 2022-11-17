import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ClientFeedbackWhereInput = {
  detailedFeedback?: StringNullableFilter;
  employee?: UserWhereUniqueInput;
  id?: StringFilter;
  improvementNeeded?: StringNullableFilter;
  meetingEtiquite?: IntFilter;
  processGovernance?: IntFilter;
  project?: ProjectWhereUniqueInput;
  qualityOfDeliverables?: IntFilter;
  reportingManager?: StringNullableFilter;
  reviewerEmail?: StringFilter;
  reviewerName?: StringNullableFilter;
  role?: StringFilter;
  status?:
    | "LinkGenerated"
    | "WaitingForFeedback"
    | "FeedbackReceived"
    | "NoResponse";
  teamWork?: IntFilter;
  technicalExpertise?: IntFilter;
};

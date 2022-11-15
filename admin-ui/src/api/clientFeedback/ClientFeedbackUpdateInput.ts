import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ClientFeedbackUpdateInput = {
  detailedFeedback?: string | null;
  employee?: UserWhereUniqueInput;
  improvementNeeded?: string | null;
  meetingEtiquite?: number;
  processGovernance?: number;
  project?: ProjectWhereUniqueInput | null;
  qualityOfDeliverables?: number;
  reportingManager?: string | null;
  reviewerEmail?: string;
  reviewerName?: string | null;
  role?: string;
  teamWork?: number;
  technicalExpertise?: number;
};

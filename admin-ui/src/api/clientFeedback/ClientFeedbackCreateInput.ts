import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ClientFeedbackCreateInput = {
  detailedFeedback?: string | null;
  employee?: UserWhereUniqueInput | null;
  improvementNeeded?: string | null;
  meetingEtiquite?: number | null;
  processGovernance?: number | null;
  project?: string | null;
  qualityOfDeliverables?: number | null;
  reportingManager?: string | null;
  reviewerEmail?: string | null;
  reviewerName?: string | null;
  role?: string | null;
  status?:
    | "LinkGenerated"
    | "WaitingForFeedback"
    | "FeedbackReceived"
    | "NoResponse"
    | null;
  teamWork?: number | null;
  technicalExpertise?: number | null;
};

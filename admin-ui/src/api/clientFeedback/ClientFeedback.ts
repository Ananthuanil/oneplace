import { User } from "../user/User";

export type ClientFeedback = {
  createdAt: Date;
  detailedFeedback: string | null;
  employee?: User | null;
  id: string;
  improvementNeeded: string | null;
  meetingEtiquite: number | null;
  organiser?: User | null;
  processGovernance: number | null;
  project: string | null;
  qualityOfDeliverables: number | null;
  reportingManager: string | null;
  reviewerEmail: string | null;
  reviewerName: string | null;
  role: string | null;
  status?:
    | "LinkGenerated"
    | "WaitingForFeedback"
    | "FeedbackReceived"
    | "NoResponse"
    | null;
  teamWork: number | null;
  technicalExpertise: number | null;
  updatedAt: Date;
};

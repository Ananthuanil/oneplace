import { User } from "../user/User";
import { Project } from "../project/Project";

export type ClientFeedback = {
  createdAt: Date;
  detailedFeedback: string | null;
  employee?: User;
  id: string;
  improvementNeeded: string | null;
  meetingEtiquite: number;
  processGovernance: number;
  project?: Project | null;
  qualityOfDeliverables: number;
  reportingManager: string | null;
  reviewerEmail: string;
  reviewerName: string | null;
  role: string;
  status?:
    | "LinkGenerated"
    | "WaitingForFeedback"
    | "FeedbackReceived"
    | "NoResponse"
    | "FeedbackError"
    | null;
  teamWork: number;
  technicalExpertise: number;
  updatedAt: Date;
};

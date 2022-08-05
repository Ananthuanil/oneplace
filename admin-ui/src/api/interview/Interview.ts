import { Candidate } from "../candidate/Candidate";
import { InterviewFeedback } from "../interviewFeedback/InterviewFeedback";
import { User } from "../user/User";
import { Opportunity } from "../opportunity/Opportunity";
import { SkillLevel } from "../skillLevel/SkillLevel";

export type Interview = {
  candidate?: Candidate | null;
  closed: boolean | null;
  createdAt: Date;
  currentStatus?:
    | "Scheduled"
    | "CompletedButAwaitingFeedback"
    | "Rescheduled"
    | "Rejected"
    | "Accepted"
    | null;
  date: Date | null;
  feedback?: Array<InterviewFeedback>;
  id: string;
  interviewer?: User | null;
  level: string | null;
  mode: string | null;
  opportunity?: Opportunity | null;
  skillMatrix?: Array<SkillLevel>;
  subject: string | null;
  updatedAt: Date;
};

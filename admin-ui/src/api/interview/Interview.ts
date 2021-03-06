import { Candidate } from "../candidate/Candidate";
import { InterviewFeedback } from "../interviewFeedback/InterviewFeedback";
import { User } from "../user/User";
import { Opportunity } from "../opportunity/Opportunity";

export type Interview = {
  candidate?: Candidate | null;
  closed: boolean | null;
  createdAt: Date;
  date: Date | null;
  feedback?: Array<InterviewFeedback>;
  id: string;
  interviewer?: User | null;
  level: string | null;
  mode: string | null;
  opportunity?: Opportunity | null;
  subject: string | null;
  updatedAt: Date;
};

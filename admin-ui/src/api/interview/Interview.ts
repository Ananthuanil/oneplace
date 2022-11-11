import { Candidate } from "../candidate/Candidate";
import { InterviewFeedback } from "../interviewFeedback/InterviewFeedback";
import { User } from "../user/User";

export type Interview = {
  calendarScheduleId: string | null;
  candidate?: Candidate | null;
  closed: boolean | null;
  createdAt: Date;
  currentStatus: string | null;
  date: Date | null;
  emailStatus: boolean | null;
  endDate: Date | null;
  feedback?: Array<InterviewFeedback>;
  id: string;
  interviewer?: User | null;
  level: string | null;
  mode: string | null;
  startDate: Date | null;
  subject: string | null;
  updatedAt: Date;
};

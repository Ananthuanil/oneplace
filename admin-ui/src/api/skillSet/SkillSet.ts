import { Candidate } from "../candidate/Candidate";
import { User } from "../user/User";
import { InterviewFeedback } from "../interviewFeedback/InterviewFeedback";
import { Skill } from "../skill/Skill";

export type SkillSet = {
  candidate?: Candidate | null;
  createdAt: Date;
  employees?: Array<User>;
  expertiseLevel: number | null;
  id: string;
  interviewFeedback?: InterviewFeedback | null;
  skill?: Skill | null;
  updatedAt: Date;
};

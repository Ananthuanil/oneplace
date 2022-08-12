import { InterviewFeedback } from "../interviewFeedback/InterviewFeedback";
import { Skill } from "../skill/Skill";
import { User } from "../user/User";

export type SkillLevel = {
  createdAt: Date;
  id: string;
  interviewFeedback?: InterviewFeedback | null;
  level: number | null;
  skill?: Skill | null;
  updatedAt: Date;
  users?: Array<User>;
};

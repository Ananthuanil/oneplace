import { InterviewFeedbackWhereUniqueInput } from "../interviewFeedback/InterviewFeedbackWhereUniqueInput";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";

export type SkillLevelCreateInput = {
  interviewFeedback?: InterviewFeedbackWhereUniqueInput | null;
  level?: number | null;
  skill?: SkillWhereUniqueInput | null;
};

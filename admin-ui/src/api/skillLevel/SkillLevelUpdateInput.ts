import { InterviewFeedbackWhereUniqueInput } from "../interviewFeedback/InterviewFeedbackWhereUniqueInput";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";
import { UserUpdateManyWithoutSkillLevelsInput } from "./UserUpdateManyWithoutSkillLevelsInput";

export type SkillLevelUpdateInput = {
  interviewFeedback?: InterviewFeedbackWhereUniqueInput | null;
  level?: number | null;
  skill?: SkillWhereUniqueInput | null;
  users?: UserUpdateManyWithoutSkillLevelsInput;
};

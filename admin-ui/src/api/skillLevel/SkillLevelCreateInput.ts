import { InterviewFeedbackWhereUniqueInput } from "../interviewFeedback/InterviewFeedbackWhereUniqueInput";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";
import { UserCreateNestedManyWithoutSkillLevelsInput } from "./UserCreateNestedManyWithoutSkillLevelsInput";

export type SkillLevelCreateInput = {
  interviewFeedback?: InterviewFeedbackWhereUniqueInput | null;
  level?: number | null;
  skill?: SkillWhereUniqueInput | null;
  users?: UserCreateNestedManyWithoutSkillLevelsInput;
};

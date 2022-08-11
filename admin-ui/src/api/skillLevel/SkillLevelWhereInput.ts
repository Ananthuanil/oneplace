import { StringFilter } from "../../util/StringFilter";
import { InterviewFeedbackWhereUniqueInput } from "../interviewFeedback/InterviewFeedbackWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";

export type SkillLevelWhereInput = {
  id?: StringFilter;
  interviewFeedback?: InterviewFeedbackWhereUniqueInput;
  level?: IntNullableFilter;
  skill?: SkillWhereUniqueInput;
};

import { StringFilter } from "../../util/StringFilter";
import { InterviewFeedbackWhereUniqueInput } from "../interviewFeedback/InterviewFeedbackWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type SkillLevelWhereInput = {
  id?: StringFilter;
  interviewFeedback?: InterviewFeedbackWhereUniqueInput;
  level?: IntNullableFilter;
  skill?: SkillWhereUniqueInput;
  users?: UserListRelationFilter;
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommunicationFeedbackWhereUniqueInput } from "../communicationFeedback/CommunicationFeedbackWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InterviewWhereUniqueInput } from "../interview/InterviewWhereUniqueInput";
import { SkillLevelListRelationFilter } from "../skillLevel/SkillLevelListRelationFilter";
import { SkillSetListRelationFilter } from "../skillSet/SkillSetListRelationFilter";

export type InterviewFeedbackWhereInput = {
  attitudeFeedback?: StringNullableFilter;
  comments?: StringNullableFilter;
  communication?: CommunicationFeedbackWhereUniqueInput;
  feedback?: StringFilter;
  id?: StringFilter;
  interview?: InterviewWhereUniqueInput;
  logicFeedback?: StringNullableFilter;
  relevantTechFeedback?: StringNullableFilter;
  skillMatrices?: SkillLevelListRelationFilter;
  skillSets?: SkillSetListRelationFilter;
  status?: "Passed" | "NotPassed" | "Hold";
};

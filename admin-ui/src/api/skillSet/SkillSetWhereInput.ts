import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InterviewFeedbackWhereUniqueInput } from "../interviewFeedback/InterviewFeedbackWhereUniqueInput";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";

export type SkillSetWhereInput = {
  candidate?: CandidateWhereUniqueInput;
  employees?: UserListRelationFilter;
  expertiseLevel?: IntNullableFilter;
  id?: StringFilter;
  interviewFeedback?: InterviewFeedbackWhereUniqueInput;
  opportunity?: OpportunityWhereUniqueInput;
  skill?: SkillWhereUniqueInput;
};

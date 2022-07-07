import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { UserCreateNestedManyWithoutSkillSetsInput } from "./UserCreateNestedManyWithoutSkillSetsInput";
import { InterviewFeedbackWhereUniqueInput } from "../interviewFeedback/InterviewFeedbackWhereUniqueInput";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";

export type SkillSetCreateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  employees?: UserCreateNestedManyWithoutSkillSetsInput;
  expertiseLevel?: number | null;
  interviewFeedback?: InterviewFeedbackWhereUniqueInput | null;
  opportunity?: OpportunityWhereUniqueInput | null;
  skill?: SkillWhereUniqueInput | null;
};

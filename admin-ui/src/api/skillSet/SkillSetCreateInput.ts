import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { UserCreateNestedManyWithoutSkillSetsInput } from "./UserCreateNestedManyWithoutSkillSetsInput";
import { InterviewFeedbackWhereUniqueInput } from "../interviewFeedback/InterviewFeedbackWhereUniqueInput";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";

export type SkillSetCreateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  employees?: UserCreateNestedManyWithoutSkillSetsInput;
  expertiseLevel?: number | null;
  interviewFeedback?: InterviewFeedbackWhereUniqueInput | null;
  skill?: SkillWhereUniqueInput | null;
};

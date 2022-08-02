import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { UserUpdateManyWithoutSkillSetsInput } from "./UserUpdateManyWithoutSkillSetsInput";
import { InterviewFeedbackWhereUniqueInput } from "../interviewFeedback/InterviewFeedbackWhereUniqueInput";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";

export type SkillSetUpdateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  employees?: UserUpdateManyWithoutSkillSetsInput;
  expertiseLevel?: number | null;
  interviewFeedback?: InterviewFeedbackWhereUniqueInput | null;
  skill?: SkillWhereUniqueInput | null;
};

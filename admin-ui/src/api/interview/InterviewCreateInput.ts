import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { InterviewFeedbackCreateNestedManyWithoutInterviewsInput } from "./InterviewFeedbackCreateNestedManyWithoutInterviewsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { SkillLevelCreateNestedManyWithoutInterviewsInput } from "./SkillLevelCreateNestedManyWithoutInterviewsInput";

export type InterviewCreateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  closed?: boolean | null;
  currentStatus?:
    | "Scheduled"
    | "CompletedButAwaitingFeedback"
    | "Rescheduled"
    | "Rejected"
    | "Accepted"
    | null;
  date?: Date | null;
  feedback?: InterviewFeedbackCreateNestedManyWithoutInterviewsInput;
  interviewer?: UserWhereUniqueInput | null;
  level?: string | null;
  mode?: string | null;
  opportunity?: OpportunityWhereUniqueInput | null;
  skillMatrix?: SkillLevelCreateNestedManyWithoutInterviewsInput;
  subject?: string | null;
};

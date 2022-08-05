import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { InterviewFeedbackUpdateManyWithoutInterviewsInput } from "./InterviewFeedbackUpdateManyWithoutInterviewsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { SkillLevelUpdateManyWithoutInterviewsInput } from "./SkillLevelUpdateManyWithoutInterviewsInput";

export type InterviewUpdateInput = {
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
  feedback?: InterviewFeedbackUpdateManyWithoutInterviewsInput;
  interviewer?: UserWhereUniqueInput | null;
  level?: string | null;
  mode?: string | null;
  opportunity?: OpportunityWhereUniqueInput | null;
  skillMatrix?: SkillLevelUpdateManyWithoutInterviewsInput;
  subject?: string | null;
};

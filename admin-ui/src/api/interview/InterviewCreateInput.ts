import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { InterviewFeedbackCreateNestedManyWithoutInterviewsInput } from "./InterviewFeedbackCreateNestedManyWithoutInterviewsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";

export type InterviewCreateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  closed?: boolean | null;
  currentStatus?: string | null;
  date?: Date | null;
  endDate?: Date | null;
  feedback?: InterviewFeedbackCreateNestedManyWithoutInterviewsInput;
  interviewer?: UserWhereUniqueInput | null;
  level?: string | null;
  mode?: string | null;
  opportunity?: OpportunityWhereUniqueInput | null;
  startDate?: Date | null;
  subject?: string | null;
};

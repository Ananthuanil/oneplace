import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { InterviewFeedbackCreateNestedManyWithoutInterviewsInput } from "./InterviewFeedbackCreateNestedManyWithoutInterviewsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";

export type InterviewCreateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  closed?: boolean | null;
  date?: Date | null;
  feedback?: InterviewFeedbackCreateNestedManyWithoutInterviewsInput;
  interviewer?: UserWhereUniqueInput | null;
  level?: string | null;
  mode?: string | null;
  opportunity?: OpportunityWhereUniqueInput | null;
  subject?: string | null;
};

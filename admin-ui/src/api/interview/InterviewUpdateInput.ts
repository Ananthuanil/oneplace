import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { InterviewFeedbackUpdateManyWithoutInterviewsInput } from "./InterviewFeedbackUpdateManyWithoutInterviewsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";

export type InterviewUpdateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  closed?: boolean | null;
  date?: Date | null;
  feedback?: InterviewFeedbackUpdateManyWithoutInterviewsInput;
  interviewer?: UserWhereUniqueInput | null;
  level?: string | null;
  mode?: string | null;
  opportunity?: OpportunityWhereUniqueInput | null;
  subject?: string | null;
};

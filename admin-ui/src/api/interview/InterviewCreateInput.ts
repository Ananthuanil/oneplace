import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { InterviewFeedbackCreateNestedManyWithoutInterviewsInput } from "./InterviewFeedbackCreateNestedManyWithoutInterviewsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InterviewCreateInput = {
  calendarScheduleId?: string | null;
  candidate?: CandidateWhereUniqueInput | null;
  closed?: boolean | null;
  currentStatus?: string | null;
  date?: Date | null;
  endDate?: Date | null;
  feedback?: InterviewFeedbackCreateNestedManyWithoutInterviewsInput;
  interviewer?: UserWhereUniqueInput | null;
  level?: string | null;
  mode?: string | null;
  startDate?: Date | null;
  subject?: string | null;
};

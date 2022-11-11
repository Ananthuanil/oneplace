import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { InterviewFeedbackUpdateManyWithoutInterviewsInput } from "./InterviewFeedbackUpdateManyWithoutInterviewsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InterviewUpdateInput = {
  calendarScheduleId?: string | null;
  candidate?: CandidateWhereUniqueInput | null;
  closed?: boolean | null;
  currentStatus?: string | null;
  date?: Date | null;
  emailStatus?: boolean | null;
  endDate?: Date | null;
  feedback?: InterviewFeedbackUpdateManyWithoutInterviewsInput;
  interviewer?: UserWhereUniqueInput | null;
  level?: string | null;
  mode?: string | null;
  startDate?: Date | null;
  subject?: string | null;
};

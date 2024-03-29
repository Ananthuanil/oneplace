import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { InterviewFeedbackListRelationFilter } from "../interviewFeedback/InterviewFeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InterviewWhereInput = {
  calendarScheduleId?: StringNullableFilter;
  candidate?: CandidateWhereUniqueInput;
  closed?: BooleanNullableFilter;
  currentStatus?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  emailStatus?: BooleanNullableFilter;
  endDate?: DateTimeNullableFilter;
  feedback?: InterviewFeedbackListRelationFilter;
  id?: StringFilter;
  interviewer?: UserWhereUniqueInput;
  level?: StringNullableFilter;
  mode?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  subject?: StringNullableFilter;
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { InterviewFeedbackListRelationFilter } from "../interviewFeedback/InterviewFeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";

export type InterviewWhereInput = {
  calendarScheduleId?: StringNullableFilter;
  candidate?: CandidateWhereUniqueInput;
  closed?: BooleanNullableFilter;
  currentStatus?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  feedback?: InterviewFeedbackListRelationFilter;
  id?: StringFilter;
  interviewer?: UserWhereUniqueInput;
  level?: StringNullableFilter;
  mode?: StringNullableFilter;
  opportunity?: OpportunityWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
  subject?: StringNullableFilter;
};

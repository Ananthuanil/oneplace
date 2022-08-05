import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { InterviewFeedbackListRelationFilter } from "../interviewFeedback/InterviewFeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { SkillLevelListRelationFilter } from "../skillLevel/SkillLevelListRelationFilter";

export type InterviewWhereInput = {
  candidate?: CandidateWhereUniqueInput;
  closed?: BooleanNullableFilter;
  currentStatus?:
    | "Scheduled"
    | "CompletedButAwaitingFeedback"
    | "Rescheduled"
    | "Rejected"
    | "Accepted";
  date?: DateTimeNullableFilter;
  feedback?: InterviewFeedbackListRelationFilter;
  id?: StringFilter;
  interviewer?: UserWhereUniqueInput;
  level?: StringNullableFilter;
  mode?: StringNullableFilter;
  opportunity?: OpportunityWhereUniqueInput;
  skillMatrix?: SkillLevelListRelationFilter;
  subject?: StringNullableFilter;
};

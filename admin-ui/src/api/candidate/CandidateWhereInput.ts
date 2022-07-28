import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InterviewListRelationFilter } from "../interview/InterviewListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SkillListRelationFilter } from "../skill/SkillListRelationFilter";
import { SkillSetListRelationFilter } from "../skillSet/SkillSetListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type CandidateWhereInput = {
  additionalComments?: StringNullableFilter;
  category?: "P1" | "P2" | "P3";
  competitorCtc?: FloatNullableFilter;
  currentCtc?: FloatNullableFilter;
  currentDesignation?: StringNullableFilter;
  currentFirm?: StringNullableFilter;
  currentStatus?:
    | "Parked"
    | "AwaitingInterview"
    | "InterviewScheduled"
    | "InterviewSelected"
    | "OfferReleased"
    | "Joined"
    | "OfferRejected";
  email?: StringFilter;
  expectedCtc?: FloatNullableFilter;
  externalRecruitmentPartner?: StringNullableFilter;
  id?: StringFilter;
  interviews?: InterviewListRelationFilter;
  isOnNoticePeriod?: BooleanFilter;
  lastWorkingDay?: DateTimeNullableFilter;
  name?: StringFilter;
  noticePeriodTime?: FloatNullableFilter;
  referalEmployee?: UserWhereUniqueInput;
  resume?: StringNullableFilter;
  skills?: SkillListRelationFilter;
  skillSets?: SkillSetListRelationFilter;
  source?: "Internal" | "Referral" | "ExternalRecruitmentPartner";
  totalExperience?: IntFilter;
};

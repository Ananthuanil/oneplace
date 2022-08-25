import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommunicationFeedbackWhereUniqueInput } from "../communicationFeedback/CommunicationFeedbackWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RecruitmentPartnerWhereUniqueInput } from "../recruitmentPartner/RecruitmentPartnerWhereUniqueInput";
import { InterviewListRelationFilter } from "../interview/InterviewListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SkillListRelationFilter } from "../skill/SkillListRelationFilter";
import { SkillSetListRelationFilter } from "../skillSet/SkillSetListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type CandidateWhereInput = {
  additionalComments?: StringNullableFilter;
  category?: "P1" | "P2" | "P3";
  communicationFeedback?: CommunicationFeedbackWhereUniqueInput;
  competitorCtc?: FloatNullableFilter;
  currentCtc?: FloatNullableFilter;
  currentDesignation?: StringNullableFilter;
  currentFirm?: StringNullableFilter;
  currentStatus?: StringFilter;
  email?: StringFilter;
  expectedCtc?: FloatNullableFilter;
  externalRecruitmentPartner?: RecruitmentPartnerWhereUniqueInput;
  id?: StringFilter;
  interviews?: InterviewListRelationFilter;
  isOnNoticePeriod?: BooleanFilter;
  lastWorkingDay?: DateTimeNullableFilter;
  name?: StringFilter;
  noticePeriodTime?: FloatNullableFilter;
  opportunity?: OpportunityWhereUniqueInput;
  referalEmployee?: UserWhereUniqueInput;
  resume?: StringNullableFilter;
  skills?: SkillListRelationFilter;
  skillSets?: SkillSetListRelationFilter;
  source?: "Internal" | "Referral" | "ExternalRecruitmentPartner";
  totalExperience?: FloatFilter;
};

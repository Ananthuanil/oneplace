import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InterviewListRelationFilter } from "../interview/InterviewListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkillListRelationFilter } from "../skill/SkillListRelationFilter";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SkillSetListRelationFilter } from "../skillSet/SkillSetListRelationFilter";

export type OpportunityWhereInput = {
  claimedPerson?: UserWhereUniqueInput;
  currentStatus?:
    | "Lead"
    | "OpenOppurtunaty"
    | "NotQualifiedLead"
    | "Replacement"
    | "MappedAndAwaitingInterviewSlot"
    | "AwaitingInterviewFeedback"
    | "OnHold"
    | "Won"
    | "Failed";
  id?: StringFilter;
  interviews?: InterviewListRelationFilter;
  mappedPerson?: UserWhereUniqueInput;
  name?: StringNullableFilter;
  optionalSkillset?: SkillListRelationFilter;
  partner?: PartnerWhereUniqueInput;
  requiredExperience?: IntNullableFilter;
  requiredSkillset?: SkillSetListRelationFilter;
  requirements?: StringNullableFilter;
  source?: "New" | "BackFill";
  winOdds?: IntNullableFilter;
};

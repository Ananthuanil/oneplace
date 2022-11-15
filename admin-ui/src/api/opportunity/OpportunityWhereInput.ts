import { CandidateListRelationFilter } from "../candidate/CandidateListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SkillListRelationFilter } from "../skill/SkillListRelationFilter";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OpportunityWhereInput = {
  candidates?: CandidateListRelationFilter;
  claimedPerson?: UserWhereUniqueInput;
  currentStatus?: StringNullableFilter;
  id?: StringFilter;
  mappedPerson?: CandidateListRelationFilter;
  name?: StringNullableFilter;
  optionalSkillset?: SkillListRelationFilter;
  partner?: PartnerWhereUniqueInput;
  procurementStatus?: "new" | "replacement";
  project?: ProjectWhereUniqueInput;
  requiredExperience?: IntNullableFilter;
  requiredSkills?: SkillListRelationFilter;
  requirements?: StringNullableFilter;
  resumeId?: StringNullableFilter;
  source?: "New" | "BackFill";
  winOdds?: IntNullableFilter;
};

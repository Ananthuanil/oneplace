import { CandidateListRelationFilter } from "../candidate/CandidateListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { SkillLevelListRelationFilter } from "../skillLevel/SkillLevelListRelationFilter";
import { SkillSetListRelationFilter } from "../skillSet/SkillSetListRelationFilter";

export type SkillWhereInput = {
  candidate?: CandidateListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  opportunity?: OpportunityWhereUniqueInput;
  oppurtunatyRequiredSkills?: OpportunityWhereUniqueInput;
  skillMatrices?: SkillLevelListRelationFilter;
  skillSets?: SkillSetListRelationFilter;
};

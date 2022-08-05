import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { SkillLevelListRelationFilter } from "../skillLevel/SkillLevelListRelationFilter";
import { SkillSetListRelationFilter } from "../skillSet/SkillSetListRelationFilter";

export type SkillWhereInput = {
  candidate?: CandidateWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  opportunity?: OpportunityWhereUniqueInput;
  oppurtunatyRequiredSkills?: OpportunityWhereUniqueInput;
  skillMatrices?: SkillLevelListRelationFilter;
  skillSets?: SkillSetListRelationFilter;
};

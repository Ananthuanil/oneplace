import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkillSetListRelationFilter } from "../skillSet/SkillSetListRelationFilter";

export type SkillWhereInput = {
  candidate?: CandidateWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  skillSets?: SkillSetListRelationFilter;
};

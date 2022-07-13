import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { SkillSetCreateNestedManyWithoutSkillsInput } from "./SkillSetCreateNestedManyWithoutSkillsInput";

export type SkillCreateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  name?: string | null;
  skillSets?: SkillSetCreateNestedManyWithoutSkillsInput;
};

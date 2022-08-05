import { StringFilter } from "../../util/StringFilter";
import { InterviewWhereUniqueInput } from "../interview/InterviewWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";

export type SkillLevelWhereInput = {
  id?: StringFilter;
  interview?: InterviewWhereUniqueInput;
  level?: IntNullableFilter;
  skill?: SkillWhereUniqueInput;
};

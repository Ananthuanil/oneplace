import { InterviewWhereUniqueInput } from "../interview/InterviewWhereUniqueInput";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";

export type SkillLevelUpdateInput = {
  interview?: InterviewWhereUniqueInput | null;
  level?: number | null;
  skill?: SkillWhereUniqueInput | null;
};

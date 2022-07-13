import { SkillSetWhereInput } from "./SkillSetWhereInput";
import { SkillSetOrderByInput } from "./SkillSetOrderByInput";

export type SkillSetFindManyArgs = {
  where?: SkillSetWhereInput;
  orderBy?: Array<SkillSetOrderByInput>;
  skip?: number;
  take?: number;
};

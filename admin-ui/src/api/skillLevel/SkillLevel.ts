import { Interview } from "../interview/Interview";
import { Skill } from "../skill/Skill";

export type SkillLevel = {
  createdAt: Date;
  id: string;
  interview?: Interview | null;
  level: number | null;
  skill?: Skill | null;
  updatedAt: Date;
};

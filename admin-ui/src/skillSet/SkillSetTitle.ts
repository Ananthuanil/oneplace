import { SkillSet as TSkillSet } from "../api/skillSet/SkillSet";

export const SKILLSET_TITLE_FIELD = "id";

export const SkillSetTitle = (record: TSkillSet): string => {
  return record.id || record.id;
};

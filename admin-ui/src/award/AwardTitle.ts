import { Award as TAward } from "../api/award/Award";

export const AWARD_TITLE_FIELD = "awardType";

export const AwardTitle = (record: TAward): string => {
  return record.awardType || record.id;
};

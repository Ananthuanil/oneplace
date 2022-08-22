import { RecruitmentPartner as TRecruitmentPartner } from "../api/recruitmentPartner/RecruitmentPartner";

export const RECRUITMENTPARTNER_TITLE_FIELD = "name";

export const RecruitmentPartnerTitle = (
  record: TRecruitmentPartner
): string => {
  return record.name || record.id;
};

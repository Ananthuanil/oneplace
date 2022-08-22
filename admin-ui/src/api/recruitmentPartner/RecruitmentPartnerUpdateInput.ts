import { CandidateUpdateManyWithoutRecruitmentPartnersInput } from "./CandidateUpdateManyWithoutRecruitmentPartnersInput";

export type RecruitmentPartnerUpdateInput = {
  candidates?: CandidateUpdateManyWithoutRecruitmentPartnersInput;
  name?: string | null;
};

import { CandidateCreateNestedManyWithoutRecruitmentPartnersInput } from "./CandidateCreateNestedManyWithoutRecruitmentPartnersInput";

export type RecruitmentPartnerCreateInput = {
  candidates?: CandidateCreateNestedManyWithoutRecruitmentPartnersInput;
  name?: string | null;
};

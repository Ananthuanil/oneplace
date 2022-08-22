import { CandidateListRelationFilter } from "../candidate/CandidateListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RecruitmentPartnerWhereInput = {
  candidates?: CandidateListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};

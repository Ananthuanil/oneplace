import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OpportunityListRelationFilter } from "../opportunity/OpportunityListRelationFilter";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { ProjectInvolvementListRelationFilter } from "../projectInvolvement/ProjectInvolvementListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  opportunities?: OpportunityListRelationFilter;
  partner?: PartnerWhereUniqueInput;
  projectInvolvements?: ProjectInvolvementListRelationFilter;
  startDate?: DateTimeNullableFilter;
  users?: UserListRelationFilter;
};

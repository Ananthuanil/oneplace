import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OpportunityListRelationFilter } from "../opportunity/OpportunityListRelationFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type PartnerWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  opportunities?: OpportunityListRelationFilter;
  projects?: ProjectListRelationFilter;
};

import { CommunityActivityListRelationFilter } from "../communityActivity/CommunityActivityListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommunityWhereInput = {
  communityActivities?: CommunityActivityListRelationFilter;
  communityLeads?: UserListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
};

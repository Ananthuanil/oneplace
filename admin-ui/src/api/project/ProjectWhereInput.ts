import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  partner?: PartnerWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
  users?: UserListRelationFilter;
};

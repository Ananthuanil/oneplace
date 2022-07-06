import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AwardWhereInput = {
  awardType?: StringNullableFilter;
  comment?: StringNullableFilter;
  fromPerson?: UserWhereUniqueInput;
  id?: StringFilter;
  toPerson?: UserWhereUniqueInput;
};

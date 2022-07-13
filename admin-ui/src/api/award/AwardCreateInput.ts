import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AwardCreateInput = {
  awardType?: string | null;
  comment?: string | null;
  fromPerson?: UserWhereUniqueInput | null;
  toPerson?: UserWhereUniqueInput | null;
};

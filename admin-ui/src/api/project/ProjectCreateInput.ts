import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { UserCreateNestedManyWithoutProjectsInput } from "./UserCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  name?: string | null;
  partner?: PartnerWhereUniqueInput | null;
  startDate?: Date | null;
  users?: UserCreateNestedManyWithoutProjectsInput;
};

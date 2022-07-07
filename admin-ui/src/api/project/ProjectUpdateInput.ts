import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { UserUpdateManyWithoutProjectsInput } from "./UserUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  name?: string | null;
  partner?: PartnerWhereUniqueInput | null;
  startDate?: Date | null;
  users?: UserUpdateManyWithoutProjectsInput;
};

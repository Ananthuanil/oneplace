import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { ProjectInvolvementUpdateManyWithoutProjectsInput } from "./ProjectInvolvementUpdateManyWithoutProjectsInput";
import { UserUpdateManyWithoutProjectsInput } from "./UserUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  name?: string | null;
  partner?: PartnerWhereUniqueInput | null;
  projectInvolvements?: ProjectInvolvementUpdateManyWithoutProjectsInput;
  startDate?: Date | null;
  users?: UserUpdateManyWithoutProjectsInput;
};

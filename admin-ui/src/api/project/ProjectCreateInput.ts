import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { ProjectInvolvementCreateNestedManyWithoutProjectsInput } from "./ProjectInvolvementCreateNestedManyWithoutProjectsInput";
import { UserCreateNestedManyWithoutProjectsInput } from "./UserCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  name?: string | null;
  partner?: PartnerWhereUniqueInput | null;
  projectInvolvements?: ProjectInvolvementCreateNestedManyWithoutProjectsInput;
  startDate?: Date | null;
  users?: UserCreateNestedManyWithoutProjectsInput;
};

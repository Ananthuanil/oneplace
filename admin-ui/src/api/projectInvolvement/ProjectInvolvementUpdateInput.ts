import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectInvolvementUpdateInput = {
  involvementPercentage?: number | null;
  project?: ProjectWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

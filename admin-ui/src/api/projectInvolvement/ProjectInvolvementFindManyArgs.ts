import { ProjectInvolvementWhereInput } from "./ProjectInvolvementWhereInput";
import { ProjectInvolvementOrderByInput } from "./ProjectInvolvementOrderByInput";

export type ProjectInvolvementFindManyArgs = {
  where?: ProjectInvolvementWhereInput;
  orderBy?: Array<ProjectInvolvementOrderByInput>;
  skip?: number;
  take?: number;
};

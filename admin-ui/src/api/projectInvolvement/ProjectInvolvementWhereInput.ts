import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectInvolvementWhereInput = {
  id?: StringFilter;
  involvementPercentage?: IntNullableFilter;
  project?: ProjectWhereUniqueInput;
  user?: UserWhereUniqueInput;
};

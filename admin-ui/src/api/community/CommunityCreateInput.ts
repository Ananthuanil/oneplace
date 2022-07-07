import { UserCreateNestedManyWithoutCommunitiesInput } from "./UserCreateNestedManyWithoutCommunitiesInput";

export type CommunityCreateInput = {
  description?: string | null;
  name?: string | null;
  users?: UserCreateNestedManyWithoutCommunitiesInput;
};

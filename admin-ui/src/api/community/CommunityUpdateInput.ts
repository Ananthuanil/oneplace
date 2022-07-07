import { UserUpdateManyWithoutCommunitiesInput } from "./UserUpdateManyWithoutCommunitiesInput";

export type CommunityUpdateInput = {
  description?: string | null;
  name?: string | null;
  users?: UserUpdateManyWithoutCommunitiesInput;
};

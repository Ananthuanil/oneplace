import { CommunityActivityWhereInput } from "./CommunityActivityWhereInput";
import { CommunityActivityOrderByInput } from "./CommunityActivityOrderByInput";

export type CommunityActivityFindManyArgs = {
  where?: CommunityActivityWhereInput;
  orderBy?: Array<CommunityActivityOrderByInput>;
  skip?: number;
  take?: number;
};

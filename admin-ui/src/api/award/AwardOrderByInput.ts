import { SortOrder } from "../../util/SortOrder";

export type AwardOrderByInput = {
  awardType?: SortOrder;
  comment?: SortOrder;
  createdAt?: SortOrder;
  fromPersonId?: SortOrder;
  id?: SortOrder;
  toPersonId?: SortOrder;
  updatedAt?: SortOrder;
};

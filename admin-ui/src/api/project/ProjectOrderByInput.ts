import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  partnerId?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};

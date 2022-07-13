import { Partner } from "../partner/Partner";
import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  id: string;
  name: string | null;
  partner?: Partner | null;
  startDate: Date | null;
  updatedAt: Date;
  users?: Array<User>;
};

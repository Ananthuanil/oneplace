import { User } from "../user/User";

export type Community = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};

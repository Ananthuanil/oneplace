import { User } from "../user/User";

export type Award = {
  awardType: string | null;
  comment: string | null;
  createdAt: Date;
  fromPerson?: User | null;
  id: string;
  toPerson?: User | null;
  updatedAt: Date;
};

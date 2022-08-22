import { Candidate } from "../candidate/Candidate";

export type RecruitmentPartner = {
  candidates?: Array<Candidate>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};

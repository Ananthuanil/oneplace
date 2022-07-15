import { Award } from "../award/Award";
import { Candidate } from "../candidate/Candidate";
import { Community } from "../community/Community";
import { Interview } from "../interview/Interview";
import { Opportunity } from "../opportunity/Opportunity";
import { Project } from "../project/Project";
import { SkillSet } from "../skillSet/SkillSet";

export type User = {
  aadarNumber: string | null;
  address: string | null;
  awards?: Array<Award>;
  bloodGroup: string | null;
  candidates?: Array<Candidate>;
  careerOutDate: Date | null;
  careerStartDate: Date | null;
  community?: Community | null;
  contactNumber: number | null;
  createdAt: Date;
  dateOfJoining: Date | null;
  designation: string | null;
  dob: Date | null;
  email: string | null;
  emergencyContactNumber: number | null;
  firstName: string;
  fwExperience: string | null;
  gender?: "male" | "female" | "others";
  id: string;
  image: string | null;
  interviews?: Array<Interview>;
  lastName: string;
  mappedPerson?: Array<Opportunity>;
  opportunities?: Array<Opportunity>;
  panNumber: string | null;
  personalEmailId: string | null;
  project?: Project | null;
  roles: Array<string>;
  skillSets?: Array<SkillSet>;
  toPerson?: Array<Award>;
  totalExperience: string;
  updatedAt: Date;
  username: string;
};

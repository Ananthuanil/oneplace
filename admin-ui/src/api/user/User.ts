import { Award } from "../award/Award";
import { Candidate } from "../candidate/Candidate";
import { Community } from "../community/Community";
import { Interview } from "../interview/Interview";
import { Opportunity } from "../opportunity/Opportunity";
import { Project } from "../project/Project";
import { ProjectInvolvement } from "../projectInvolvement/ProjectInvolvement";
import { SkillSet } from "../skillSet/SkillSet";

export type User = {
  aadarNumber: string | null;
  address: string | null;
  awards?: Array<Award>;
  bloodGroup: string | null;
  candidates?: Array<Candidate>;
  careerStartDate: Date | null;
  community?: Community | null;
  contactNumber: string | null;
  courseOutDate: Date | null;
  createdAt: Date;
  dateOfJoining: Date | null;
  designation?:
    | "Joe"
    | "Engineer"
    | "SeniorEngineer"
    | "Consultant"
    | "SeniorConsultant"
    | "PrincipalConsultant"
    | "Director"
    | "Cxo"
    | null;
  dob: Date | null;
  email: string | null;
  emergencyContactNumber: string | null;
  firstName: string;
  folderLink: string | null;
  fwExperience: string | null;
  gender?: "Male" | "Female" | "Others" | null;
  id: string;
  image: string | null;
  imageLink: string | null;
  interviews?: Array<Interview>;
  lastName: string;
  mappedPerson?: Array<Opportunity>;
  opportunities?: Array<Opportunity>;
  panNumber: string | null;
  personalEmailId: string | null;
  previousFirmOutDate: Date | null;
  project?: Array<Project>;
  projectInvolved?: Array<ProjectInvolvement>;
  resumeLink: string | null;
  roles: Array<string>;
  skillSets?: Array<SkillSet>;
  toPerson?: Array<Award>;
  totalExperience: string;
  updatedAt: Date;
  username: string;
};

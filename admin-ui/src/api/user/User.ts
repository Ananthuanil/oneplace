import { Attendance } from "../attendance/Attendance";
import { Award } from "../award/Award";
import { Candidate } from "../candidate/Candidate";
import { ClientFeedback } from "../clientFeedback/ClientFeedback";
import { Community } from "../community/Community";
import { CommunityActivityFeedback } from "../communityActivityFeedback/CommunityActivityFeedback";
import { EmployeeFeedback } from "../employeeFeedback/EmployeeFeedback";
import { Interview } from "../interview/Interview";
import { Opportunity } from "../opportunity/Opportunity";
import { Project } from "../project/Project";
import { ProjectInvolvement } from "../projectInvolvement/ProjectInvolvement";
import { JsonValue } from "type-fest";
import { SkillLevel } from "../skillLevel/SkillLevel";
import { SkillSet } from "../skillSet/SkillSet";

export type User = {
  aadarNumber: string | null;
  address: string | null;
  attendances?: Array<Attendance>;
  awards?: Array<Award>;
  bloodGroup: string | null;
  candidates?: Array<Candidate>;
  careerStartDate: Date | null;
  clientFeedbacks?: Array<ClientFeedback>;
  communities?: Array<Community>;
  community?: Community | null;
  communityActivityFeedbacks?: Array<CommunityActivityFeedback>;
  communityMentor?: User | null;
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
  employeeFeedbacks?: Array<EmployeeFeedback>;
  firstName: string;
  folderLink: string | null;
  fwExperience: string | null;
  gender?: "Male" | "Female" | "Others" | null;
  id: string;
  image: string | null;
  imageLink: string | null;
  interviews?: Array<Interview>;
  lastName: string;
  notifications: string | null;
  opportunities?: Array<Opportunity>;
  opportunity?: Array<Opportunity>;
  organiser?: Array<ClientFeedback>;
  panNumber: string | null;
  personalEmailId: string | null;
  previousFirmOutDate: Date | null;
  project?: Array<Project>;
  projectInvolved?: Array<ProjectInvolvement>;
  resumeLink: string | null;
  reviewer?: Array<EmployeeFeedback>;
  roles: JsonValue;
  secondaryEmail: string | null;
  skillLevel?: SkillLevel | null;
  skillSets?: Array<SkillSet>;
  toPerson?: Array<Award>;
  totalExperience: string;
  updatedAt: Date;
  username: string;
  users?: Array<User>;
};

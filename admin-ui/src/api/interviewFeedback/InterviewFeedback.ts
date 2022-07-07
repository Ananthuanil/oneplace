import { CommunicationFeedback } from "../communicationFeedback/CommunicationFeedback";
import { Interview } from "../interview/Interview";
import { SkillSet } from "../skillSet/SkillSet";

export type InterviewFeedback = {
  attitudeFeedback: string | null;
  comments: string | null;
  communication?: CommunicationFeedback | null;
  createdAt: Date;
  feedback: string;
  id: string;
  interview?: Interview | null;
  logicFeedback: string | null;
  relevantTechFeedback: string | null;
  skillSets?: Array<SkillSet>;
  status?: "Passed" | "NotPassed" | "Hold" | null;
  updatedAt: Date;
};

import { Candidate } from "../candidate/Candidate";
import { InterviewFeedback } from "../interviewFeedback/InterviewFeedback";

export type CommunicationFeedback = {
  abilityToArticulate: string | null;
  candidates?: Array<Candidate>;
  confidenceLevel: string | null;
  createdAt: Date;
  englishSpeakingSkills: string | null;
  id: string;
  interviewFeedbacks?: InterviewFeedback | null;
  updatedAt: Date;
};

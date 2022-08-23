import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { InterviewFeedbackWhereUniqueInput } from "../interviewFeedback/InterviewFeedbackWhereUniqueInput";

export type CommunicationFeedbackUpdateInput = {
  abilityToArticulate?: string | null;
  candidates?: CandidateWhereUniqueInput | null;
  confidenceLevel?: string | null;
  englishSpeakingSkills?: string | null;
  interviewFeedbacks?: InterviewFeedbackWhereUniqueInput | null;
};

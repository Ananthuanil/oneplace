import { InterviewFeedbackWhereUniqueInput } from "../interviewFeedback/InterviewFeedbackWhereUniqueInput";

export type CommunicationFeedbackCreateInput = {
  abilityToArticulate?: string | null;
  confidenceLevel?: string | null;
  englishSpeakingSkills?: string | null;
  interviewFeedbacks?: InterviewFeedbackWhereUniqueInput | null;
};

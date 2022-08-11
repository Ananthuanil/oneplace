import { InterviewFeedbackWhereUniqueInput } from "../interviewFeedback/InterviewFeedbackWhereUniqueInput";

export type CommunicationFeedbackUpdateInput = {
  abilityToArticulate?: string | null;
  confidenceLevel?: string | null;
  englishSpeakingSkills?: string | null;
  interviewFeedbacks?: InterviewFeedbackWhereUniqueInput | null;
};

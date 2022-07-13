import { InterviewFeedbackCreateNestedManyWithoutCommunicationFeedbacksInput } from "./InterviewFeedbackCreateNestedManyWithoutCommunicationFeedbacksInput";

export type CommunicationFeedbackCreateInput = {
  abilityToArticulate?: string | null;
  confidenceLevel?: string | null;
  englishSpeakingSkills?: string | null;
  interviewFeedbacks?: InterviewFeedbackCreateNestedManyWithoutCommunicationFeedbacksInput;
};

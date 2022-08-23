import { CandidateUpdateManyWithoutCommunicationFeedbacksInput } from "./CandidateUpdateManyWithoutCommunicationFeedbacksInput";
import { InterviewFeedbackWhereUniqueInput } from "../interviewFeedback/InterviewFeedbackWhereUniqueInput";

export type CommunicationFeedbackUpdateInput = {
  abilityToArticulate?: string | null;
  candidates?: CandidateUpdateManyWithoutCommunicationFeedbacksInput;
  confidenceLevel?: string | null;
  englishSpeakingSkills?: string | null;
  interviewFeedbacks?: InterviewFeedbackWhereUniqueInput | null;
};

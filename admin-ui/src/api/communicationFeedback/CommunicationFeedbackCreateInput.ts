import { CandidateCreateNestedManyWithoutCommunicationFeedbacksInput } from "./CandidateCreateNestedManyWithoutCommunicationFeedbacksInput";
import { InterviewFeedbackWhereUniqueInput } from "../interviewFeedback/InterviewFeedbackWhereUniqueInput";

export type CommunicationFeedbackCreateInput = {
  abilityToArticulate?: string | null;
  candidates?: CandidateCreateNestedManyWithoutCommunicationFeedbacksInput;
  confidenceLevel?: string | null;
  englishSpeakingSkills?: string | null;
  interviewFeedbacks?: InterviewFeedbackWhereUniqueInput | null;
};

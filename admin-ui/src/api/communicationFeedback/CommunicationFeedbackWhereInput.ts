import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CandidateListRelationFilter } from "../candidate/CandidateListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InterviewFeedbackWhereUniqueInput } from "../interviewFeedback/InterviewFeedbackWhereUniqueInput";

export type CommunicationFeedbackWhereInput = {
  abilityToArticulate?: StringNullableFilter;
  candidates?: CandidateListRelationFilter;
  confidenceLevel?: StringNullableFilter;
  englishSpeakingSkills?: StringNullableFilter;
  id?: StringFilter;
  interviewFeedbacks?: InterviewFeedbackWhereUniqueInput;
};

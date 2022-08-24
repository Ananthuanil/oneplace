import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CandidateTitle } from "../candidate/CandidateTitle";
import { InterviewFeedbackTitle } from "../interviewFeedback/InterviewFeedbackTitle";

export const CommunicationFeedbackEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="ability_to_articulate"
          multiline
          source="abilityToArticulate"
        />
        <ReferenceInput
          source="candidate.id"
          reference="Candidate"
          label="Candidates"
        >
          <SelectInput optionText={CandidateTitle} />
        </ReferenceInput>
        <TextInput
          label="confidence_level"
          multiline
          source="confidenceLevel"
        />
        <TextInput
          label="english_speaking_skills"
          multiline
          source="englishSpeakingSkills"
        />
        <ReferenceInput
          source="interviewfeedback.id"
          reference="InterviewFeedback"
          label="Interview Feedbacks"
        >
          <SelectInput optionText={InterviewFeedbackTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

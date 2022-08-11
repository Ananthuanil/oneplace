import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { InterviewFeedbackTitle } from "../interviewFeedback/InterviewFeedbackTitle";

export const CommunicationFeedbackCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ability_to_articulate" source="abilityToArticulate" />
        <TextInput label="confidence_level" source="confidenceLevel" />
        <TextInput
          label="english_speaking_skills"
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
    </Create>
  );
};

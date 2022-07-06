import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { InterviewFeedbackTitle } from "../interviewFeedback/InterviewFeedbackTitle";

export const CommunicationFeedbackEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ability_to_articulate" source="abilityToArticulate" />
        <TextInput label="confidence_level" source="confidenceLevel" />
        <TextInput
          label="english_speaking_skills"
          source="englishSpeakingSkills"
        />
        <ReferenceArrayInput
          source="interviewFeedbacks"
          reference="InterviewFeedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InterviewFeedbackTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

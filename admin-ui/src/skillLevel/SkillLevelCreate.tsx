import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { InterviewFeedbackTitle } from "../interviewFeedback/InterviewFeedbackTitle";
import { SkillTitle } from "../skill/SkillTitle";

export const SkillLevelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="interviewfeedback.id"
          reference="InterviewFeedback"
          label="InterviewFeedback"
        >
          <SelectInput optionText={InterviewFeedbackTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="level" source="level" />
        <ReferenceInput source="skill.id" reference="Skill" label="skill">
          <SelectInput optionText={SkillTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

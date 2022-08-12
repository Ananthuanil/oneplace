import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { InterviewFeedbackTitle } from "../interviewFeedback/InterviewFeedbackTitle";
import { SkillTitle } from "../skill/SkillTitle";
import { UserTitle } from "../user/UserTitle";

export const SkillLevelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

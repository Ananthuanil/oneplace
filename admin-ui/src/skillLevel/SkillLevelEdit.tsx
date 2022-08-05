import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { InterviewTitle } from "../interview/InterviewTitle";
import { SkillTitle } from "../skill/SkillTitle";

export const SkillLevelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="interview.id"
          reference="Interview"
          label="Interview"
        >
          <SelectInput optionText={InterviewTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="level" source="level" />
        <ReferenceInput source="skill.id" reference="Skill" label="skill">
          <SelectInput optionText={SkillTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

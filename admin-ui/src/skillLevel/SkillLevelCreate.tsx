import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { InterviewTitle } from "../interview/InterviewTitle";
import { SkillTitle } from "../skill/SkillTitle";

export const SkillLevelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};

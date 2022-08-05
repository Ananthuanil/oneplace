import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { INTERVIEW_TITLE_FIELD } from "../interview/InterviewTitle";
import { SKILL_TITLE_FIELD } from "../skill/SkillTitle";

export const SkillLevelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Interview"
          source="interview.id"
          reference="Interview"
        >
          <TextField source={INTERVIEW_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="level" source="level" />
        <ReferenceField label="skill" source="skill.id" reference="Skill">
          <TextField source={SKILL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { INTERVIEW_TITLE_FIELD } from "../interview/InterviewTitle";
import { SKILL_TITLE_FIELD } from "../skill/SkillTitle";

export const SkillLevelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"skillMatrices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

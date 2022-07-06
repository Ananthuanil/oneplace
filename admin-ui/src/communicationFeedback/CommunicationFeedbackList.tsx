import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CommunicationFeedbackList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"communication_feedbacks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ability_to_articulate" source="abilityToArticulate" />
        <TextField label="confidence_level" source="confidenceLevel" />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="english_speaking_skills"
          source="englishSpeakingSkills"
        />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

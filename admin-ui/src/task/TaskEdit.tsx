import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AttendanceTitle } from "../attendance/AttendanceTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="attendance.id"
          reference="Attendance"
          label="attendance"
        >
          <SelectInput optionText={AttendanceTitle} />
        </ReferenceInput>
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <TextInput label="specification" multiline source="specification" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Completed", value: "Completed" },
            { label: "In Progress", value: "inProgress" },
            { label: "Blocker", value: "blocker" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Ticket id" source="ticketId" />
        <TextInput label="Ticket link" source="ticketLink" />
        <TextInput label="Ticket name" source="ticketName" />
      </SimpleForm>
    </Edit>
  );
};

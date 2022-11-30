import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ATTENDANCE_TITLE_FIELD } from "../attendance/AttendanceTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const TaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="attendance"
          source="attendance.id"
          reference="Attendance"
        >
          <TextField source={ATTENDANCE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="specification" source="specification" />
        <TextField label="status" source="status" />
        <TextField label="Ticket id" source="ticketId" />
        <TextField label="Ticket link" source="ticketLink" />
        <TextField label="Ticket name" source="ticketName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

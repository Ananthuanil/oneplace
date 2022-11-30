import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ATTENDANCE_TITLE_FIELD } from "../attendance/AttendanceTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const TaskList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tasks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ATTENDANCE_TITLE_FIELD } from "./AttendanceTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AttendanceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="attendanceStatus" source="attendanceStatus" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="employee" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="loginTime" source="loginTime" />
        <TextField label="logoutTime" source="logoutTime" />
        <TextField label="office" source="office" />
        <TextField label="temp" source="temp" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="work mode" source="workMode" />
        <ReferenceManyField
          reference="Task"
          target="AttendanceId"
          label="Tasks"
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
            <ReferenceField
              label="Project"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="specification" source="specification" />
            <TextField label="status" source="status" />
            <TextField label="Ticket id" source="ticketId" />
            <TextField label="Ticket link" source="ticketLink" />
            <TextField label="Ticket name" source="ticketName" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PARTNER_TITLE_FIELD } from "../partner/PartnerTitle";
import { PROJECT_TITLE_FIELD } from "./ProjectTitle";
import { ATTENDANCE_TITLE_FIELD } from "../attendance/AttendanceTitle";

export const ProjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Partner" source="partner.id" reference="Partner">
          <TextField source={PARTNER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Start Date" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Opportunity"
          target="ProjectId"
          label="Opportunities"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Claimed Person"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Current Status" source="currentStatus" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <ReferenceField
              label="Partner"
              source="partner.id"
              reference="Partner"
            >
              <TextField source={PARTNER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Procurement Status" source="procurementStatus" />
            <ReferenceField
              label="Project"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Required Experience"
              source="requiredExperience"
            />
            <TextField label="Requirements" source="requirements" />
            <TextField label="Resume ID" source="resumeId" />
            <TextField label="Source" source="source" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Win Odds" source="winOdds" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProjectInvolvement"
          target="ProjectId"
          label="ProjectInvolvements"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField
              label="involvementPercentage"
              source="involvementPercentage"
            />
            <ReferenceField
              label="project"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="Employees" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Task" target="ProjectId" label="Tasks">
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

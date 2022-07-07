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

import { COMMUNITY_TITLE_FIELD } from "../community/CommunityTitle";
import { PROJECT_TITLE_FIELD } from "./ProjectTitle";
import { PARTNER_TITLE_FIELD } from "../partner/PartnerTitle";

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
        <ReferenceManyField reference="User" target="ProjectId" label="Users">
          <Datagrid rowClick="show">
            <TextField label="Aadar Number" source="aadarNumber" />
            <TextField label="Address" source="address" />
            <TextField label="Blood Group" source="bloodGroup" />
            <TextField label="Career Out Date" source="careerOutDate" />
            <TextField label="Career Start Date" source="careerStartDate" />
            <ReferenceField
              label="Community"
              source="community.id"
              reference="Community"
            >
              <TextField source={COMMUNITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Contact Number" source="contactNumber" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date of Joining" source="dateOfJoining" />
            <TextField label="Designation" source="designation" />
            <TextField label="DOB" source="dob" />
            <TextField label="Email" source="email" />
            <TextField
              label="Emergency Contact Number"
              source="emergencyContactNumber"
            />
            <TextField label="First Name" source="firstName" />
            <TextField label="Fw Experience" source="fwExperience" />
            <TextField label="Gender" source="gender" />
            <TextField label="ID" source="id" />
            <TextField label="Image" source="image" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Pan Number" source="panNumber" />
            <TextField label="Personal Email ID" source="personalEmailId" />
            <ReferenceField
              label="Project"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Roles" source="roles" />
            <TextField label="Total Experience" source="totalExperience" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMMUNITY_TITLE_FIELD } from "./CommunityTitle";

export const CommunityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="User" target="CommunityId" label="Users">
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
            <TextField label="Course Out Date" source="courseOutDate" />
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
            <TextField label="Folder Link" source="folderLink" />
            <TextField label="Fw Experience" source="fwExperience" />
            <TextField label="Gender" source="gender" />
            <TextField label="ID" source="id" />
            <TextField label="Image" source="image" />
            <TextField label="Image Link" source="imageLink" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Pan Number" source="panNumber" />
            <TextField label="Personal Email ID" source="personalEmailId" />
            <TextField label="Resume Link" source="resumeLink" />
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

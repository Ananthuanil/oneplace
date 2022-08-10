import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMMUNITY_TITLE_FIELD } from "../community/CommunityTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};

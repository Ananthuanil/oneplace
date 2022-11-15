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
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { SKILLLEVEL_TITLE_FIELD } from "./SkillLevelTitle";
import { INTERVIEWFEEDBACK_TITLE_FIELD } from "../interviewFeedback/InterviewFeedbackTitle";
import { SKILL_TITLE_FIELD } from "../skill/SkillTitle";

export const SkillLevelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="InterviewFeedback"
          source="interviewfeedback.id"
          reference="InterviewFeedback"
        >
          <TextField source={INTERVIEWFEEDBACK_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="level" source="level" />
        <ReferenceField label="skill" source="skill.id" reference="Skill">
          <TextField source={SKILL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="User"
          target="SkillLevelId"
          label="Users"
        >
          <Datagrid rowClick="show">
            <TextField label="Aadar Number" source="aadarNumber" />
            <TextField label="Address" source="address" />
            <TextField label="Blood Group" source="bloodGroup" />
            <TextField label="Career Start Date" source="careerStartDate" />
            <ReferenceField
              label="Community"
              source="community.id"
              reference="Community"
            >
              <TextField source={COMMUNITY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="CommunityMentor"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
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
            <TextField label="notifications" source="notifications" />
            <TextField label="Pan Number" source="panNumber" />
            <TextField label="Personal Email ID" source="personalEmailId" />
            <TextField
              label="Previous Firm Out Date"
              source="previousFirmOutDate"
            />
            <TextField label="Resume Link" source="resumeLink" />
            <TextField label="Roles" source="roles" />
            <TextField label="Secondary Email" source="secondaryEmail" />
            <ReferenceField
              label="Skill Level"
              source="skilllevel.id"
              reference="SkillLevel"
            >
              <TextField source={SKILLLEVEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Total Experience" source="totalExperience" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

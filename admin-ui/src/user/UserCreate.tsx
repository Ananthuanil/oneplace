import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  PasswordInput,
} from "react-admin";

import { AttendanceTitle } from "../attendance/AttendanceTitle";
import { AwardTitle } from "../award/AwardTitle";
import { CandidateTitle } from "../candidate/CandidateTitle";
import { ClientFeedbackTitle } from "../clientFeedback/ClientFeedbackTitle";
import { CommunityTitle } from "../community/CommunityTitle";
import { CommunityActivityFeedbackTitle } from "../communityActivityFeedback/CommunityActivityFeedbackTitle";
import { UserTitle } from "./UserTitle";
import { EmployeeFeedbackTitle } from "../employeeFeedback/EmployeeFeedbackTitle";
import { InterviewTitle } from "../interview/InterviewTitle";
import { OpportunityTitle } from "../opportunity/OpportunityTitle";
import { ProjectTitle } from "../project/ProjectTitle";
import { ProjectInvolvementTitle } from "../projectInvolvement/ProjectInvolvementTitle";
import { SkillLevelTitle } from "../skillLevel/SkillLevelTitle";
import { SkillSetTitle } from "../skillSet/SkillSetTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Aadar Number" source="aadarNumber" />
        <TextInput label="Address" multiline source="address" />
        <ReferenceArrayInput
          source="attendances"
          reference="Attendance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendanceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="awards"
          reference="Award"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AwardTitle} />
        </ReferenceArrayInput>
        <TextInput label="Blood Group" source="bloodGroup" />
        <ReferenceArrayInput
          source="candidates"
          reference="Candidate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateTitle} />
        </ReferenceArrayInput>
        <DateInput label="Career Start Date" source="careerStartDate" />
        <ReferenceArrayInput
          source="clientFeedbacks"
          reference="ClientFeedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ClientFeedbackTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="communities"
          reference="Community"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommunityTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="community.id"
          reference="Community"
          label="Community"
        >
          <SelectInput optionText={CommunityTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="communityActivityFeedbacks"
          reference="CommunityActivityFeedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommunityActivityFeedbackTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="user.id"
          reference="User"
          label="CommunityMentor"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Contact Number" source="contactNumber" />
        <DateInput label="Course Out Date" source="courseOutDate" />
        <DateInput label="Date of Joining" source="dateOfJoining" />
        <SelectInput
          source="designation"
          label="Designation"
          choices={[
            { label: "JOE", value: "Joe" },
            { label: "Engineer", value: "Engineer" },
            { label: "Senior Engineer", value: "SeniorEngineer" },
            { label: "Consultant", value: "Consultant" },
            { label: "Senior Consultant", value: "SeniorConsultant" },
            { label: "Principal Consultant", value: "PrincipalConsultant" },
            { label: "Director", value: "Director" },
            { label: "CXO", value: "Cxo" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateInput label="DOB" source="dob" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput
          label="Emergency Contact Number"
          source="emergencyContactNumber"
        />
        <ReferenceArrayInput
          source="employeeFeedbacks"
          reference="EmployeeFeedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeFeedbackTitle} />
        </ReferenceArrayInput>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Folder Link" source="folderLink" />
        <TextInput label="Fw Experience" source="fwExperience" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Others", value: "Others" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Image" source="image" />
        <TextInput label="Image Link" source="imageLink" />
        <ReferenceArrayInput
          source="interviews"
          reference="Interview"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InterviewTitle} />
        </ReferenceArrayInput>
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="notifications" source="notifications" />
        <ReferenceArrayInput
          source="opportunities"
          reference="Opportunity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OpportunityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="opportunity"
          reference="Opportunity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OpportunityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organiser"
          reference="ClientFeedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ClientFeedbackTitle} />
        </ReferenceArrayInput>
        <TextInput label="Pan Number" source="panNumber" />
        <PasswordInput label="Password" source="password" />
        <TextInput
          label="Personal Email ID"
          source="personalEmailId"
          type="email"
        />
        <DateInput
          label="Previous Firm Out Date"
          source="previousFirmOutDate"
        />
        <ReferenceArrayInput
          source="project"
          reference="Project"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="projectInvolved"
          reference="ProjectInvolvement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectInvolvementTitle} />
        </ReferenceArrayInput>
        <TextInput label="Resume Link" source="resumeLink" />
        <ReferenceArrayInput
          source="reviewer"
          reference="EmployeeFeedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeFeedbackTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput
          label="Secondary Email"
          source="secondaryEmail"
          type="email"
        />
        <ReferenceInput
          source="skilllevel.id"
          reference="SkillLevel"
          label="Skill Level"
        >
          <SelectInput optionText={SkillLevelTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="skillSets"
          reference="SkillSet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkillSetTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="toPerson"
          reference="Award"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AwardTitle} />
        </ReferenceArrayInput>
        <TextInput label="Total Experience" source="totalExperience" />
        <TextInput label="Username" source="username" />
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  PasswordInput,
} from "react-admin";

import { AwardTitle } from "../award/AwardTitle";
import { CandidateTitle } from "../candidate/CandidateTitle";
import { CommunityTitle } from "../community/CommunityTitle";
import { InterviewTitle } from "../interview/InterviewTitle";
import { OpportunityTitle } from "../opportunity/OpportunityTitle";
import { ProjectTitle } from "../project/ProjectTitle";
import { SkillSetTitle } from "../skillSet/SkillSetTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Aadar Number" source="aadarNumber" />
        <TextInput label="Address" multiline source="address" />
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
        <DateInput label="Career Out Date" source="careerOutDate" />
        <DateInput label="Career Start Date" source="careerStartDate" />
        <ReferenceInput
          source="community.id"
          reference="Community"
          label="Community"
        >
          <SelectInput optionText={CommunityTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Contact Number" source="contactNumber" />
        <DateInput label="Date of Joining" source="dateOfJoining" />
        <TextInput label="Designation" source="designation" />
        <DateInput label="DOB" source="dob" />
        <TextInput label="Email" source="email" type="email" />
        <NumberInput
          step={1}
          label="Emergency Contact Number"
          source="emergencyContactNumber"
        />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Fw Experience" source="fwExperience" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Others", value: "others" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Image" source="image" />
        <ReferenceArrayInput
          source="interviews"
          reference="Interview"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InterviewTitle} />
        </ReferenceArrayInput>
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="mappedPerson"
          reference="Opportunity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OpportunityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="opportunities"
          reference="Opportunity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OpportunityTitle} />
        </ReferenceArrayInput>
        <TextInput label="Pan Number" source="panNumber" />
        <PasswordInput label="Password" source="password" />
        <TextInput
          label="Personal Email ID"
          source="personalEmailId"
          type="email"
        />
        <ReferenceArrayInput
          source="project"
          reference="Project"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
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
      </SimpleForm>
    </Edit>
  );
};

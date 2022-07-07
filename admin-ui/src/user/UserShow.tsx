import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { OPPORTUNITY_TITLE_FIELD } from "../opportunity/OpportunityTitle";
import { PARTNER_TITLE_FIELD } from "../partner/PartnerTitle";
import { COMMUNITY_TITLE_FIELD } from "../community/CommunityTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Roles" source="roles" />
        <TextField label="Total Experience" source="totalExperience" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Award" target="UserId" label="Awards">
          <Datagrid rowClick="show">
            <TextField label="awardType" source="awardType" />
            <TextField label="comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="fromPerson"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="toPerson" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Candidate"
          target="UserId"
          label="Candidates"
        >
          <Datagrid rowClick="show">
            <TextField
              label="Additional Comments"
              source="additionalComments"
            />
            <TextField label="category" source="category" />
            <TextField label="competitor_ctc" source="competitorCtc" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="current_ctc" source="currentCtc" />
            <TextField
              label="Current Designation"
              source="currentDesignation"
            />
            <TextField label="Current Firm" source="currentFirm" />
            <TextField label="Current Status" source="currentStatus" />
            <TextField label="Email" source="email" />
            <TextField label="expected_ctc" source="expectedCtc" />
            <TextField
              label="external_recruitment_partner"
              source="externalRecruitmentPartner"
            />
            <TextField label="ID" source="id" />
            <BooleanField
              label="Is On Notice Period"
              source="isOnNoticePeriod"
            />
            <TextField label="Last Working Day" source="lastWorkingDay" />
            <TextField label="Name" source="name" />
            <TextField label="Notice Period Time" source="noticePeriodTime" />
            <ReferenceField
              label="referal_employee"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="source" source="source" />
            <TextField label="Total Experience" source="totalExperience" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Interview"
          target="UserId"
          label="Interviews"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Candidate"
              source="candidate.id"
              reference="Candidate"
            >
              <TextField source={CANDIDATE_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="closed" source="closed" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Interviewer"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Level" source="level" />
            <TextField label="Mode" source="mode" />
            <ReferenceField
              label="Opportunity"
              source="opportunity.id"
              reference="Opportunity"
            >
              <TextField source={OPPORTUNITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="subject" source="subject" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Opportunity"
          target="UserId"
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
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Mapped Person"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="name" source="name" />
            <ReferenceField
              label="Partner"
              source="partner.id"
              reference="Partner"
            >
              <TextField source={PARTNER_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Required Experience"
              source="requiredExperience"
            />
            <TextField label="Requirements" source="requirements" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Opportunity"
          target="UserId"
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
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Mapped Person"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="name" source="name" />
            <ReferenceField
              label="Partner"
              source="partner.id"
              reference="Partner"
            >
              <TextField source={PARTNER_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Required Experience"
              source="requiredExperience"
            />
            <TextField label="Requirements" source="requirements" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Award" target="UserId" label="Awards">
          <Datagrid rowClick="show">
            <TextField label="awardType" source="awardType" />
            <TextField label="comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="fromPerson"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="toPerson" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

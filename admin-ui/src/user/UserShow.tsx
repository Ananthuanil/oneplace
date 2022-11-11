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
import { COMMUNICATIONFEEDBACK_TITLE_FIELD } from "../communicationFeedback/CommunicationFeedbackTitle";
import { RECRUITMENTPARTNER_TITLE_FIELD } from "../recruitmentPartner/RecruitmentPartnerTitle";
import { OPPORTUNITY_TITLE_FIELD } from "../opportunity/OpportunityTitle";
import { COMMUNITYACTIVITY_TITLE_FIELD } from "../communityActivity/CommunityActivityTitle";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { PARTNER_TITLE_FIELD } from "../partner/PartnerTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";
import { COMMUNITY_TITLE_FIELD } from "../community/CommunityTitle";
import { SKILLLEVEL_TITLE_FIELD } from "../skillLevel/SkillLevelTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
            <ReferenceField
              label="Communication Feedback"
              source="communicationfeedback.id"
              reference="CommunicationFeedback"
            >
              <TextField source={COMMUNICATIONFEEDBACK_TITLE_FIELD} />
            </ReferenceField>
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
            <ReferenceField
              label="external_recruitment_partner"
              source="recruitmentpartner.id"
              reference="RecruitmentPartner"
            >
              <TextField source={RECRUITMENTPARTNER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField
              label="Is On Notice Period"
              source="isOnNoticePeriod"
            />
            <TextField label="Last Working Day" source="lastWorkingDay" />
            <TextField label="Name" source="name" />
            <TextField label="Notice Period Time" source="noticePeriodTime" />
            <ReferenceField
              label="opportunity"
              source="opportunity.id"
              reference="Opportunity"
            >
              <TextField source={OPPORTUNITY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="referal_employee"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Resume" source="resume" />
            <TextField label="source" source="source" />
            <TextField label="Total Experience" source="totalExperience" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CommunityActivityFeedback"
          target="UserId"
          label="community_activity_feedbacks"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="activity"
              source="communityactivity.id"
              reference="CommunityActivity"
            >
              <TextField source={COMMUNITYACTIVITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="activity_feedback" source="activityFeedback" />
            <BooleanField label="attendance" source="attendance" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="employee" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="rating" source="rating" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EmployeeFeedback"
          target="UserId"
          label="EmployeeFeedbacks"
        >
          <Datagrid rowClick="show">
            <TextField label="area " source="area" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <ReferenceField label="employee" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="nature " source="nature" />
            <TextField label="remark " source="remark" />
            <ReferenceField label="reviewer" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Interview"
          target="UserId"
          label="Interviews"
        >
          <Datagrid rowClick="show">
            <TextField
              label="Calendar Schedule Id"
              source="calendarScheduleId"
            />
            <ReferenceField
              label="Candidate"
              source="candidate.id"
              reference="Candidate"
            >
              <TextField source={CANDIDATE_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="closed" source="closed" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Current Status" source="currentStatus" />
            <TextField label="Date" source="date" />
            <BooleanField label="Email Status" source="emailStatus" />
            <TextField label="End Date" source="endDate" />
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
            <TextField label="Start Date" source="startDate" />
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
            <TextField label="Current Status" source="currentStatus" />
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
            <TextField label="Current Status" source="currentStatus" />
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
          target="UserId"
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
        <ReferenceManyField
          reference="EmployeeFeedback"
          target="UserId"
          label="EmployeeFeedbacks"
        >
          <Datagrid rowClick="show">
            <TextField label="area " source="area" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <ReferenceField label="employee" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="nature " source="nature" />
            <TextField label="remark " source="remark" />
            <ReferenceField label="reviewer" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
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

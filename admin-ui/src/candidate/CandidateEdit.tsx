import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  DateInput,
  ReferenceInput,
} from "react-admin";

import { InterviewTitle } from "../interview/InterviewTitle";
import { UserTitle } from "../user/UserTitle";
import { SkillTitle } from "../skill/SkillTitle";
import { SkillSetTitle } from "../skillSet/SkillSetTitle";

export const CandidateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="Additional Comments"
          multiline
          source="additionalComments"
        />
        <SelectInput
          source="category"
          label="category"
          choices={[
            { label: "p1", value: "P1" },
            { label: "p2", value: "P2" },
            { label: "p3", value: "P3" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput label="competitor_ctc" source="competitorCtc" />
        <NumberInput label="current_ctc" source="currentCtc" />
        <TextInput label="Current Designation" source="currentDesignation" />
        <TextInput label="Current Firm" source="currentFirm" />
        <SelectInput
          source="currentStatus"
          label="Current Status"
          choices={[
            { label: "Parked", value: "Parked" },
            { label: "Awaiting Interview", value: "AwaitingInterview" },
            { label: "Interview Scheduled", value: "InterviewScheduled" },
            { label: "Interview Selected", value: "InterviewSelected" },
            { label: "Offer Released", value: "OfferReleased" },
            { label: "Joined", value: "Joined" },
            { label: "Offer Rejected", value: "OfferRejected" },
            { label: "Interview Rejected", value: "InterviewRejected" },
            { label: "On Hold", value: "OnHold" },
            { label: "Awaiting Feedback", value: "AwaitingFeedback" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Email" source="email" type="email" />
        <NumberInput label="expected_ctc" source="expectedCtc" />
        <TextInput
          label="external_recruitment_partner"
          source="externalRecruitmentPartner"
        />
        <ReferenceArrayInput
          source="interviews"
          reference="Interview"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InterviewTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Is On Notice Period" source="isOnNoticePeriod" />
        <DateInput label="Last Working Day" source="lastWorkingDay" />
        <TextInput label="Name" source="name" />
        <NumberInput label="Notice Period Time" source="noticePeriodTime" />
        <ReferenceInput
          source="user.id"
          reference="User"
          label="referal_employee"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Resume" source="resume" />
        <ReferenceArrayInput
          source="skills"
          reference="Skill"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkillTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="skillSets"
          reference="SkillSet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkillSetTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="source"
          label="source"
          choices={[
            { label: "Internal", value: "Internal" },
            { label: "Referral", value: "Referral" },
            {
              label: "External Recruitment partner",
              value: "ExternalRecruitmentPartner",
            },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput
          step={1}
          label="Total Experience"
          source="totalExperience"
        />
      </SimpleForm>
    </Edit>
  );
};

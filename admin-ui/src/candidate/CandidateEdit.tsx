import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  DateInput,
} from "react-admin";

import { CommunicationFeedbackTitle } from "../communicationFeedback/CommunicationFeedbackTitle";
import { RecruitmentPartnerTitle } from "../recruitmentPartner/RecruitmentPartnerTitle";
import { InterviewTitle } from "../interview/InterviewTitle";
import { OpportunityTitle } from "../opportunity/OpportunityTitle";
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
        <ReferenceInput
          source="communicationfeedback.id"
          reference="CommunicationFeedback"
          label="Communication Feedback"
        >
          <SelectInput optionText={CommunicationFeedbackTitle} />
        </ReferenceInput>
        <NumberInput label="competitor_ctc" source="competitorCtc" />
        <NumberInput label="current_ctc" source="currentCtc" />
        <TextInput label="Current Designation" source="currentDesignation" />
        <TextInput label="Current Firm" source="currentFirm" />
        <TextInput label="Current Status" source="currentStatus" />
        <TextInput label="Email" source="email" type="email" />
        <NumberInput label="expected_ctc" source="expectedCtc" />
        <ReferenceInput
          source="recruitmentpartner.id"
          reference="RecruitmentPartner"
          label="external_recruitment_partner"
        >
          <SelectInput optionText={RecruitmentPartnerTitle} />
        </ReferenceInput>
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
        <ReferenceArrayInput
          source="opportunities"
          reference="Opportunity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OpportunityTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="opportunity.id"
          reference="Opportunity"
          label="opportunity"
        >
          <SelectInput optionText={OpportunityTitle} />
        </ReferenceInput>
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
        <NumberInput label="Total Experience" source="totalExperience" />
      </SimpleForm>
    </Edit>
  );
};

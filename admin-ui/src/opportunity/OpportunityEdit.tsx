import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { InterviewTitle } from "../interview/InterviewTitle";
import { SkillTitle } from "../skill/SkillTitle";
import { PartnerTitle } from "../partner/PartnerTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const OpportunityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="user.id"
          reference="User"
          label="Claimed Person"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <SelectInput
          source="currentStatus"
          label="Current Status"
          choices={[
            { label: "Lead", value: "Lead" },
            { label: "OpenOppurtunaty", value: "OpenOppurtunaty" },
            { label: "NotQualifiedLead", value: "NotQualifiedLead" },
            { label: "Replacement", value: "Replacement" },
            {
              label: "MappedAndAwaitingInterviewSlot",
              value: "MappedAndAwaitingInterviewSlot",
            },
            {
              label: "AwaitingInterviewFeedback",
              value: "AwaitingInterviewFeedback",
            },
            { label: "OnHold", value: "OnHold" },
            { label: "Won", value: "Won" },
            { label: "Failed", value: "Failed" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="interviews"
          reference="Interview"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InterviewTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="Mapped Person">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="optionalSkillset"
          reference="Skill"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkillTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="partner.id" reference="Partner" label="Partner">
          <SelectInput optionText={PartnerTitle} />
        </ReferenceInput>
        <SelectInput
          source="procurementStatus"
          label="Procurement Status"
          choices={[
            { label: "New", value: "new" },
            { label: "Replacement", value: "replacement" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="Required Experience"
          source="requiredExperience"
        />
        <ReferenceArrayInput
          source="requiredSkills"
          reference="Skill"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkillTitle} />
        </ReferenceArrayInput>
        <TextInput label="Requirements" multiline source="requirements" />
        <TextInput label="Resume ID" source="resumeId" />
        <SelectInput
          source="source"
          label="Source"
          choices={[
            { label: "New", value: "New" },
            { label: "BackFill", value: "BackFill" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="Win Odds" source="winOdds" />
      </SimpleForm>
    </Edit>
  );
};

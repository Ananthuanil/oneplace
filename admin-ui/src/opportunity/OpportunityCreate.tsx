import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { InterviewTitle } from "../interview/InterviewTitle";
import { PartnerTitle } from "../partner/PartnerTitle";
import { SkillSetTitle } from "../skillSet/SkillSetTitle";

export const OpportunityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="user.id"
          reference="User"
          label="Claimed Person"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
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
        <ReferenceInput source="partner.id" reference="Partner" label="Partner">
          <SelectInput optionText={PartnerTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="Required Experience"
          source="requiredExperience"
        />
        <ReferenceArrayInput
          source="requiredSkillset"
          reference="SkillSet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkillSetTitle} />
        </ReferenceArrayInput>
        <TextInput label="Requirements" multiline source="requirements" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Awarded", value: "Awarded" },
            { label: "Mapped", value: "Mapped" },
            { label: "Ongoing Interview", value: "OngoingInterview" },
            { label: "Closed", value: "Closed" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};

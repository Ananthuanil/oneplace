import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CandidateTitle } from "../candidate/CandidateTitle";
import { OpportunityTitle } from "../opportunity/OpportunityTitle";
import { SkillSetTitle } from "../skillSet/SkillSetTitle";

export const SkillCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="candidate.id"
          reference="Candidate"
          label="Candidate"
        >
          <SelectInput optionText={CandidateTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="opportunity.id"
          reference="Opportunity"
          label="Opportunity"
        >
          <SelectInput optionText={OpportunityTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="opportunity.id"
          reference="Opportunity"
          label="OppurtunatyRequiredSkills"
        >
          <SelectInput optionText={OpportunityTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="skillSets"
          reference="SkillSet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkillSetTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

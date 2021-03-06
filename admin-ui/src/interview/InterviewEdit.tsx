import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CandidateTitle } from "../candidate/CandidateTitle";
import { InterviewFeedbackTitle } from "../interviewFeedback/InterviewFeedbackTitle";
import { UserTitle } from "../user/UserTitle";
import { OpportunityTitle } from "../opportunity/OpportunityTitle";

export const InterviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="candidate.id"
          reference="Candidate"
          label="Candidate"
        >
          <SelectInput optionText={CandidateTitle} />
        </ReferenceInput>
        <BooleanInput label="closed" source="closed" />
        <DateTimeInput label="Date" source="date" />
        <ReferenceArrayInput
          source="feedback"
          reference="InterviewFeedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InterviewFeedbackTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="Interviewer">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Level" source="level" />
        <TextInput label="Mode" source="mode" />
        <ReferenceInput
          source="opportunity.id"
          reference="Opportunity"
          label="Opportunity"
        >
          <SelectInput optionText={OpportunityTitle} />
        </ReferenceInput>
        <TextInput label="subject" source="subject" />
      </SimpleForm>
    </Edit>
  );
};

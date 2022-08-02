import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { CandidateTitle } from "../candidate/CandidateTitle";
import { UserTitle } from "../user/UserTitle";
import { InterviewFeedbackTitle } from "../interviewFeedback/InterviewFeedbackTitle";
import { SkillTitle } from "../skill/SkillTitle";

export const SkillSetEdit = (props: EditProps): React.ReactElement => {
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
        <ReferenceArrayInput
          source="employees"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Expertise Level" source="expertiseLevel" />
        <ReferenceInput
          source="interviewfeedback.id"
          reference="InterviewFeedback"
          label="Interview Feedback"
        >
          <SelectInput optionText={InterviewFeedbackTitle} />
        </ReferenceInput>
        <ReferenceInput source="skill.id" reference="Skill" label="Skill">
          <SelectInput optionText={SkillTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

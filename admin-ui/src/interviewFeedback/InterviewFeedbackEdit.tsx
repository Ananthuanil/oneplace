import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CommunicationFeedbackTitle } from "../communicationFeedback/CommunicationFeedbackTitle";
import { InterviewTitle } from "../interview/InterviewTitle";
import { SkillLevelTitle } from "../skillLevel/SkillLevelTitle";
import { SkillSetTitle } from "../skillSet/SkillSetTitle";

export const InterviewFeedbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="attitude_feedback" source="attitudeFeedback" />
        <TextInput label="Comments" multiline source="comments" />
        <ReferenceInput
          source="communicationfeedback.id"
          reference="CommunicationFeedback"
          label="communication"
        >
          <SelectInput optionText={CommunicationFeedbackTitle} />
        </ReferenceInput>
        <TextInput label="Feedback" multiline source="feedback" />
        <ReferenceInput
          source="interview.id"
          reference="Interview"
          label="Interview"
        >
          <SelectInput optionText={InterviewTitle} />
        </ReferenceInput>
        <TextInput label="logic_feedback" source="logicFeedback" />
        <TextInput
          label="relevant_tech_feedback"
          source="relevantTechFeedback"
        />
        <ReferenceArrayInput
          source="skillMatrices"
          reference="SkillLevel"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkillLevelTitle} />
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
          source="status"
          label="status"
          choices={[
            { label: "Passed", value: "Passed" },
            { label: "Not Passed", value: "NotPassed" },
            { label: "Hold", value: "Hold" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};

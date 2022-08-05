/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { registerEnumType } from "@nestjs/graphql";

export enum EnumCandidateCurrentStatus {
  Parked = "Parked",
  AwaitingInterview = "AwaitingInterview",
  InterviewScheduled = "InterviewScheduled",
  InterviewSelected = "InterviewSelected",
  OfferReleased = "OfferReleased",
  Joined = "Joined",
  OfferRejected = "OfferRejected",
  InterviewRejected = "InterviewRejected",
  OnHold = "OnHold",
}

registerEnumType(EnumCandidateCurrentStatus, {
  name: "EnumCandidateCurrentStatus",
});

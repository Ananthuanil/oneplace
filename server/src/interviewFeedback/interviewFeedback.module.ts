import { Module } from "@nestjs/common";
import { InterviewFeedbackModuleBase } from "./base/interviewFeedback.module.base";
import { InterviewFeedbackService } from "./interviewFeedback.service";
import { InterviewFeedbackResolver } from "./interviewFeedback.resolver";

@Module({
  imports: [InterviewFeedbackModuleBase],
  providers: [InterviewFeedbackService, InterviewFeedbackResolver],
  exports: [InterviewFeedbackService],
})
export class InterviewFeedbackModule {}

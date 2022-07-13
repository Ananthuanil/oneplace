import { Module } from "@nestjs/common";
import { CommunicationFeedbackModuleBase } from "./base/communicationFeedback.module.base";
import { CommunicationFeedbackService } from "./communicationFeedback.service";
import { CommunicationFeedbackResolver } from "./communicationFeedback.resolver";

@Module({
  imports: [CommunicationFeedbackModuleBase],
  providers: [CommunicationFeedbackService, CommunicationFeedbackResolver],
  exports: [CommunicationFeedbackService],
})
export class CommunicationFeedbackModule {}

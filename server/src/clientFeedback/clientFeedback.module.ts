import { Module } from "@nestjs/common";
import { ClientFeedbackModuleBase } from "./base/clientFeedback.module.base";
import { ClientFeedbackService } from "./clientFeedback.service";
import { ClientFeedbackResolver } from "./clientFeedback.resolver";

@Module({
  imports: [ClientFeedbackModuleBase],
  providers: [ClientFeedbackService, ClientFeedbackResolver],
  exports: [ClientFeedbackService],
})
export class ClientFeedbackModule {}

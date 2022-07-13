import { Module } from "@nestjs/common";
import { InterviewModuleBase } from "./base/interview.module.base";
import { InterviewService } from "./interview.service";
import { InterviewResolver } from "./interview.resolver";

@Module({
  imports: [InterviewModuleBase],
  providers: [InterviewService, InterviewResolver],
  exports: [InterviewService],
})
export class InterviewModule {}

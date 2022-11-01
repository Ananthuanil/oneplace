import { Module } from "@nestjs/common";
import { CommunityActivityFeedbackModuleBase } from "./base/communityActivityFeedback.module.base";
import { CommunityActivityFeedbackService } from "./communityActivityFeedback.service";
import { CommunityActivityFeedbackResolver } from "./communityActivityFeedback.resolver";

@Module({
  imports: [CommunityActivityFeedbackModuleBase],
  providers: [
    CommunityActivityFeedbackService,
    CommunityActivityFeedbackResolver,
  ],
  exports: [CommunityActivityFeedbackService],
})
export class CommunityActivityFeedbackModule {}

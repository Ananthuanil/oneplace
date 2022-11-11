import { Module } from "@nestjs/common";
import { CommunityActivityModuleBase } from "./base/communityActivity.module.base";
import { CommunityActivityService } from "./communityActivity.service";
import { CommunityActivityResolver } from "./communityActivity.resolver";

@Module({
  imports: [CommunityActivityModuleBase],
  providers: [CommunityActivityService, CommunityActivityResolver],
  exports: [CommunityActivityService],
})
export class CommunityActivityModule {}

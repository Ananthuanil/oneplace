import { Module } from "@nestjs/common";
import { RecruitmentPartnerModuleBase } from "./base/recruitmentPartner.module.base";
import { RecruitmentPartnerService } from "./recruitmentPartner.service";
import { RecruitmentPartnerResolver } from "./recruitmentPartner.resolver";

@Module({
  imports: [RecruitmentPartnerModuleBase],
  providers: [RecruitmentPartnerService, RecruitmentPartnerResolver],
  exports: [RecruitmentPartnerService],
})
export class RecruitmentPartnerModule {}

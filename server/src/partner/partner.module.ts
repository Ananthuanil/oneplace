import { Module } from "@nestjs/common";
import { PartnerModuleBase } from "./base/partner.module.base";
import { PartnerService } from "./partner.service";
import { PartnerResolver } from "./partner.resolver";

@Module({
  imports: [PartnerModuleBase],
  providers: [PartnerService, PartnerResolver],
  exports: [PartnerService],
})
export class PartnerModule {}

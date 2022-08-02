import { Module } from "@nestjs/common";
import { ProjectInvolvementModuleBase } from "./base/projectInvolvement.module.base";
import { ProjectInvolvementService } from "./projectInvolvement.service";
import { ProjectInvolvementResolver } from "./projectInvolvement.resolver";

@Module({
  imports: [ProjectInvolvementModuleBase],
  providers: [ProjectInvolvementService, ProjectInvolvementResolver],
  exports: [ProjectInvolvementService],
})
export class ProjectInvolvementModule {}

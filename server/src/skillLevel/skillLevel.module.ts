import { Module } from "@nestjs/common";
import { SkillLevelModuleBase } from "./base/skillLevel.module.base";
import { SkillLevelService } from "./skillLevel.service";
import { SkillLevelResolver } from "./skillLevel.resolver";

@Module({
  imports: [SkillLevelModuleBase],
  providers: [SkillLevelService, SkillLevelResolver],
  exports: [SkillLevelService],
})
export class SkillLevelModule {}

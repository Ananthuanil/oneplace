import { Module } from "@nestjs/common";
import { SkillSetModuleBase } from "./base/skillSet.module.base";
import { SkillSetService } from "./skillSet.service";
import { SkillSetResolver } from "./skillSet.resolver";

@Module({
  imports: [SkillSetModuleBase],
  providers: [SkillSetService, SkillSetResolver],
  exports: [SkillSetService],
})
export class SkillSetModule {}

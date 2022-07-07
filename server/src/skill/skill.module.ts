import { Module } from "@nestjs/common";
import { SkillModuleBase } from "./base/skill.module.base";
import { SkillService } from "./skill.service";
import { SkillResolver } from "./skill.resolver";

@Module({
  imports: [SkillModuleBase],
  providers: [SkillService, SkillResolver],
  exports: [SkillService],
})
export class SkillModule {}

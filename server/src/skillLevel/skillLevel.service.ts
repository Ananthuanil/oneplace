import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SkillLevelServiceBase } from "./base/skillLevel.service.base";

@Injectable()
export class SkillLevelService extends SkillLevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

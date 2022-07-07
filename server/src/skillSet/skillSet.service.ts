import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SkillSetServiceBase } from "./base/skillSet.service.base";

@Injectable()
export class SkillSetService extends SkillSetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

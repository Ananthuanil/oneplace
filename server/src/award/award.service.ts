import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AwardServiceBase } from "./base/award.service.base";

@Injectable()
export class AwardService extends AwardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

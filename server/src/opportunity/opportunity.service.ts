import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { OpportunityServiceBase } from "./base/opportunity.service.base";

@Injectable()
export class OpportunityService extends OpportunityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

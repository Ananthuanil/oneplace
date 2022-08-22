import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RecruitmentPartnerServiceBase } from "./base/recruitmentPartner.service.base";

@Injectable()
export class RecruitmentPartnerService extends RecruitmentPartnerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

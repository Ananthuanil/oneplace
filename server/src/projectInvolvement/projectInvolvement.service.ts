import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProjectInvolvementServiceBase } from "./base/projectInvolvement.service.base";

@Injectable()
export class ProjectInvolvementService extends ProjectInvolvementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

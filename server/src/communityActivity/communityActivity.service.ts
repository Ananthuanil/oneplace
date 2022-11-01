import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CommunityActivityServiceBase } from "./base/communityActivity.service.base";

@Injectable()
export class CommunityActivityService extends CommunityActivityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CommunityActivityFeedbackServiceBase } from "./base/communityActivityFeedback.service.base";

@Injectable()
export class CommunityActivityFeedbackService extends CommunityActivityFeedbackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

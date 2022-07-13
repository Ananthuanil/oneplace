import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CommunicationFeedbackServiceBase } from "./base/communicationFeedback.service.base";

@Injectable()
export class CommunicationFeedbackService extends CommunicationFeedbackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

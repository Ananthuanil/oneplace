import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { InterviewFeedbackServiceBase } from "./base/interviewFeedback.service.base";

@Injectable()
export class InterviewFeedbackService extends InterviewFeedbackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

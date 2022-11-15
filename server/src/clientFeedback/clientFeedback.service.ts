import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ClientFeedbackServiceBase } from "./base/clientFeedback.service.base";

@Injectable()
export class ClientFeedbackService extends ClientFeedbackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

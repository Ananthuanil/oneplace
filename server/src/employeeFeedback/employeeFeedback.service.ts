import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EmployeeFeedbackServiceBase } from "./base/employeeFeedback.service.base";

@Injectable()
export class EmployeeFeedbackService extends EmployeeFeedbackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

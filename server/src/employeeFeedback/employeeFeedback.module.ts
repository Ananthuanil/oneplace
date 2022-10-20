import { Module } from "@nestjs/common";
import { EmployeeFeedbackModuleBase } from "./base/employeeFeedback.module.base";
import { EmployeeFeedbackService } from "./employeeFeedback.service";
import { EmployeeFeedbackResolver } from "./employeeFeedback.resolver";

@Module({
  imports: [EmployeeFeedbackModuleBase],
  providers: [EmployeeFeedbackService, EmployeeFeedbackResolver],
  exports: [EmployeeFeedbackService],
})
export class EmployeeFeedbackModule {}

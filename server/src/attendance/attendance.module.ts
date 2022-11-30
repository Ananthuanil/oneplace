import { Module } from "@nestjs/common";
import { AttendanceModuleBase } from "./base/attendance.module.base";
import { AttendanceService } from "./attendance.service";
import { AttendanceResolver } from "./attendance.resolver";

@Module({
  imports: [AttendanceModuleBase],
  providers: [AttendanceService, AttendanceResolver],
  exports: [AttendanceService],
})
export class AttendanceModule {}

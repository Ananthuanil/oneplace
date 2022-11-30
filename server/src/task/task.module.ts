import { Module } from "@nestjs/common";
import { TaskModuleBase } from "./base/task.module.base";
import { TaskService } from "./task.service";
import { TaskResolver } from "./task.resolver";

@Module({
  imports: [TaskModuleBase],
  providers: [TaskService, TaskResolver],
  exports: [TaskService],
})
export class TaskModule {}

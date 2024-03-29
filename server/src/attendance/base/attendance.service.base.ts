/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Attendance, Task, User } from "@prisma/client";

export class AttendanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AttendanceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendanceFindManyArgs>
  ): Promise<number> {
    return this.prisma.attendance.count(args);
  }

  async findMany<T extends Prisma.AttendanceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendanceFindManyArgs>
  ): Promise<Attendance[]> {
    return this.prisma.attendance.findMany(args);
  }
  async findOne<T extends Prisma.AttendanceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendanceFindUniqueArgs>
  ): Promise<Attendance | null> {
    return this.prisma.attendance.findUnique(args);
  }
  async create<T extends Prisma.AttendanceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendanceCreateArgs>
  ): Promise<Attendance> {
    return this.prisma.attendance.create<T>(args);
  }
  async update<T extends Prisma.AttendanceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendanceUpdateArgs>
  ): Promise<Attendance> {
    return this.prisma.attendance.update<T>(args);
  }
  async delete<T extends Prisma.AttendanceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendanceDeleteArgs>
  ): Promise<Attendance> {
    return this.prisma.attendance.delete(args);
  }

  async findTasks(
    parentId: string,
    args: Prisma.TaskFindManyArgs
  ): Promise<Task[]> {
    return this.prisma.attendance
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .tasks(args);
  }

  async getEmployee(parentId: string): Promise<User | null> {
    return this.prisma.attendance
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }
}

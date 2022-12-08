/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, EmployeeFeedback, User } from "@prisma/client";

export class EmployeeFeedbackServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EmployeeFeedbackFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeFeedbackFindManyArgs>
  ): Promise<number> {
    return this.prisma.employeeFeedback.count(args);
  }

  async findMany<T extends Prisma.EmployeeFeedbackFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeFeedbackFindManyArgs>
  ): Promise<EmployeeFeedback[]> {
    return this.prisma.employeeFeedback.findMany(args);
  }
  async findOne<T extends Prisma.EmployeeFeedbackFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeFeedbackFindUniqueArgs>
  ): Promise<EmployeeFeedback | null> {
    return this.prisma.employeeFeedback.findUnique(args);
  }
  async create<T extends Prisma.EmployeeFeedbackCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeFeedbackCreateArgs>
  ): Promise<EmployeeFeedback> {
    return this.prisma.employeeFeedback.create<T>(args);
  }
  async update<T extends Prisma.EmployeeFeedbackUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeFeedbackUpdateArgs>
  ): Promise<EmployeeFeedback> {
    return this.prisma.employeeFeedback.update<T>(args);
  }
  async delete<T extends Prisma.EmployeeFeedbackDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeFeedbackDeleteArgs>
  ): Promise<EmployeeFeedback> {
    return this.prisma.employeeFeedback.delete(args);
  }

  async getEmployee(parentId: string): Promise<User | null> {
    return this.prisma.employeeFeedback
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }

  async getReviewer(parentId: string): Promise<User | null> {
    return this.prisma.employeeFeedback
      .findUnique({
        where: { id: parentId },
      })
      .reviewer();
  }
}

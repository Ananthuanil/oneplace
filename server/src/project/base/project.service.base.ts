/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  Project,
  Opportunity,
  ProjectInvolvement,
  Task,
  User,
  Partner,
} from "@prisma/client";

export class ProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProjectFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectFindManyArgs>
  ): Promise<number> {
    return this.prisma.project.count(args);
  }

  async findMany<T extends Prisma.ProjectFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectFindManyArgs>
  ): Promise<Project[]> {
    return this.prisma.project.findMany(args);
  }
  async findOne<T extends Prisma.ProjectFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectFindUniqueArgs>
  ): Promise<Project | null> {
    return this.prisma.project.findUnique(args);
  }
  async create<T extends Prisma.ProjectCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectCreateArgs>
  ): Promise<Project> {
    return this.prisma.project.create<T>(args);
  }
  async update<T extends Prisma.ProjectUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectUpdateArgs>
  ): Promise<Project> {
    return this.prisma.project.update<T>(args);
  }
  async delete<T extends Prisma.ProjectDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectDeleteArgs>
  ): Promise<Project> {
    return this.prisma.project.delete(args);
  }

  async findOpportunities(
    parentId: string,
    args: Prisma.OpportunityFindManyArgs
  ): Promise<Opportunity[]> {
    return this.prisma.project
      .findUnique({
        where: { id: parentId },
      })
      .opportunities(args);
  }

  async findProjectInvolvements(
    parentId: string,
    args: Prisma.ProjectInvolvementFindManyArgs
  ): Promise<ProjectInvolvement[]> {
    return this.prisma.project
      .findUnique({
        where: { id: parentId },
      })
      .projectInvolvements(args);
  }

  async findTasks(
    parentId: string,
    args: Prisma.TaskFindManyArgs
  ): Promise<Task[]> {
    return this.prisma.project
      .findUnique({
        where: { id: parentId },
      })
      .tasks(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.project
      .findUnique({
        where: { id: parentId },
      })
      .users(args);
  }

  async getPartner(parentId: string): Promise<Partner | null> {
    return this.prisma.project
      .findUnique({
        where: { id: parentId },
      })
      .partner();
  }
}

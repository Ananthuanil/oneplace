/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Public } from "../../decorators/public.decorator";
import { CreateAttendanceArgs } from "./CreateAttendanceArgs";
import { UpdateAttendanceArgs } from "./UpdateAttendanceArgs";
import { DeleteAttendanceArgs } from "./DeleteAttendanceArgs";
import { AttendanceFindManyArgs } from "./AttendanceFindManyArgs";
import { AttendanceFindUniqueArgs } from "./AttendanceFindUniqueArgs";
import { Attendance } from "./Attendance";
import { TaskFindManyArgs } from "../../task/base/TaskFindManyArgs";
import { Task } from "../../task/base/Task";
import { User } from "../../user/base/User";
import { AttendanceService } from "../attendance.service";

@graphql.Resolver(() => Attendance)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AttendanceResolverBase {
  constructor(
    protected readonly service: AttendanceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _attendancesMeta(
    @graphql.Args() args: AttendanceFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @Public()
  @graphql.Query(() => [Attendance])
  async attendances(
    @graphql.Args() args: AttendanceFindManyArgs
  ): Promise<Attendance[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Attendance, { nullable: true })
  async attendance(
    @graphql.Args() args: AttendanceFindUniqueArgs
  ): Promise<Attendance | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => Attendance)
  async createAttendance(
    @graphql.Args() args: CreateAttendanceArgs
  ): Promise<Attendance> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        employee: args.data.employee
          ? {
              connect: args.data.employee,
            }
          : undefined,
      },
    });
  }

  @Public()
  @graphql.Mutation(() => Attendance)
  async updateAttendance(
    @graphql.Args() args: UpdateAttendanceArgs
  ): Promise<Attendance | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          employee: args.data.employee
            ? {
                connect: args.data.employee,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @graphql.Mutation(() => Attendance)
  async deleteAttendance(
    @graphql.Args() args: DeleteAttendanceArgs
  ): Promise<Attendance | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @graphql.ResolveField(() => [Task])
  async tasks(
    @graphql.Parent() parent: Attendance,
    @graphql.Args() args: TaskFindManyArgs
  ): Promise<Task[]> {
    const results = await this.service.findTasks(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => User, { nullable: true })
  async employee(@graphql.Parent() parent: Attendance): Promise<User | null> {
    const result = await this.service.getEmployee(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

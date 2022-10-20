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
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Public } from "../../decorators/public.decorator";
import { CreateEmployeeFeedbackArgs } from "./CreateEmployeeFeedbackArgs";
import { UpdateEmployeeFeedbackArgs } from "./UpdateEmployeeFeedbackArgs";
import { DeleteEmployeeFeedbackArgs } from "./DeleteEmployeeFeedbackArgs";
import { EmployeeFeedbackFindManyArgs } from "./EmployeeFeedbackFindManyArgs";
import { EmployeeFeedbackFindUniqueArgs } from "./EmployeeFeedbackFindUniqueArgs";
import { EmployeeFeedback } from "./EmployeeFeedback";
import { User } from "../../user/base/User";
import { EmployeeFeedbackService } from "../employeeFeedback.service";

@graphql.Resolver(() => EmployeeFeedback)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EmployeeFeedbackResolverBase {
  constructor(
    protected readonly service: EmployeeFeedbackService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "EmployeeFeedback",
    action: "read",
    possession: "any",
  })
  async _employeeFeedbacksMeta(
    @graphql.Args() args: EmployeeFeedbackFindManyArgs
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [EmployeeFeedback])
  @nestAccessControl.UseRoles({
    resource: "EmployeeFeedback",
    action: "read",
    possession: "any",
  })
  async employeeFeedbacks(
    @graphql.Args() args: EmployeeFeedbackFindManyArgs
  ): Promise<EmployeeFeedback[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => EmployeeFeedback, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "EmployeeFeedback",
    action: "read",
    possession: "own",
  })
  async employeeFeedback(
    @graphql.Args() args: EmployeeFeedbackFindUniqueArgs
  ): Promise<EmployeeFeedback | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => EmployeeFeedback)
  @nestAccessControl.UseRoles({
    resource: "EmployeeFeedback",
    action: "create",
    possession: "any",
  })
  async createEmployeeFeedback(
    @graphql.Args() args: CreateEmployeeFeedbackArgs
  ): Promise<EmployeeFeedback> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        employee: {
          connect: args.data.employee,
        },

        reviewer: {
          connect: args.data.reviewer,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => EmployeeFeedback)
  @nestAccessControl.UseRoles({
    resource: "EmployeeFeedback",
    action: "update",
    possession: "any",
  })
  async updateEmployeeFeedback(
    @graphql.Args() args: UpdateEmployeeFeedbackArgs
  ): Promise<EmployeeFeedback | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          employee: {
            connect: args.data.employee,
          },

          reviewer: {
            connect: args.data.reviewer,
          },
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

  @graphql.Mutation(() => EmployeeFeedback)
  @nestAccessControl.UseRoles({
    resource: "EmployeeFeedback",
    action: "delete",
    possession: "any",
  })
  async deleteEmployeeFeedback(
    @graphql.Args() args: DeleteEmployeeFeedbackArgs
  ): Promise<EmployeeFeedback | null> {
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
  @graphql.ResolveField(() => User, { nullable: true })
  async employee(
    @graphql.Parent() parent: EmployeeFeedback
  ): Promise<User | null> {
    const result = await this.service.getEmployee(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.ResolveField(() => User, { nullable: true })
  async reviewer(
    @graphql.Parent() parent: EmployeeFeedback
  ): Promise<User | null> {
    const result = await this.service.getReviewer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

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
import { CreateProjectInvolvementArgs } from "./CreateProjectInvolvementArgs";
import { UpdateProjectInvolvementArgs } from "./UpdateProjectInvolvementArgs";
import { DeleteProjectInvolvementArgs } from "./DeleteProjectInvolvementArgs";
import { ProjectInvolvementFindManyArgs } from "./ProjectInvolvementFindManyArgs";
import { ProjectInvolvementFindUniqueArgs } from "./ProjectInvolvementFindUniqueArgs";
import { ProjectInvolvement } from "./ProjectInvolvement";
import { Project } from "../../project/base/Project";
import { User } from "../../user/base/User";
import { ProjectInvolvementService } from "../projectInvolvement.service";

@graphql.Resolver(() => ProjectInvolvement)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProjectInvolvementResolverBase {
  constructor(
    protected readonly service: ProjectInvolvementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _projectInvolvementsMeta(
    @graphql.Args() args: ProjectInvolvementFindManyArgs
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
  @graphql.Query(() => [ProjectInvolvement])
  async projectInvolvements(
    @graphql.Args() args: ProjectInvolvementFindManyArgs
  ): Promise<ProjectInvolvement[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => ProjectInvolvement, { nullable: true })
  async projectInvolvement(
    @graphql.Args() args: ProjectInvolvementFindUniqueArgs
  ): Promise<ProjectInvolvement | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => ProjectInvolvement)
  async createProjectInvolvement(
    @graphql.Args() args: CreateProjectInvolvementArgs
  ): Promise<ProjectInvolvement> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        project: args.data.project
          ? {
              connect: args.data.project,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @Public()
  @graphql.Mutation(() => ProjectInvolvement)
  async updateProjectInvolvement(
    @graphql.Args() args: UpdateProjectInvolvementArgs
  ): Promise<ProjectInvolvement | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          project: args.data.project
            ? {
                connect: args.data.project,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
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
  @graphql.Mutation(() => ProjectInvolvement)
  async deleteProjectInvolvement(
    @graphql.Args() args: DeleteProjectInvolvementArgs
  ): Promise<ProjectInvolvement | null> {
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
  @graphql.ResolveField(() => Project, { nullable: true })
  async project(
    @graphql.Parent() parent: ProjectInvolvement
  ): Promise<Project | null> {
    const result = await this.service.getProject(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.ResolveField(() => User, { nullable: true })
  async user(
    @graphql.Parent() parent: ProjectInvolvement
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

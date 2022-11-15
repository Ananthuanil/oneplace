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
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CreateProjectArgs } from "./CreateProjectArgs";
import { UpdateProjectArgs } from "./UpdateProjectArgs";
import { DeleteProjectArgs } from "./DeleteProjectArgs";
import { ProjectFindManyArgs } from "./ProjectFindManyArgs";
import { ProjectFindUniqueArgs } from "./ProjectFindUniqueArgs";
import { Project } from "./Project";
import { ClientFeedbackFindManyArgs } from "../../clientFeedback/base/ClientFeedbackFindManyArgs";
import { ClientFeedback } from "../../clientFeedback/base/ClientFeedback";
import { OpportunityFindManyArgs } from "../../opportunity/base/OpportunityFindManyArgs";
import { Opportunity } from "../../opportunity/base/Opportunity";
import { ProjectInvolvementFindManyArgs } from "../../projectInvolvement/base/ProjectInvolvementFindManyArgs";
import { ProjectInvolvement } from "../../projectInvolvement/base/ProjectInvolvement";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { Partner } from "../../partner/base/Partner";
import { ProjectService } from "../project.service";

@graphql.Resolver(() => Project)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProjectResolverBase {
  constructor(
    protected readonly service: ProjectService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _projectsMeta(
    @graphql.Args() args: ProjectFindManyArgs
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
  @graphql.Query(() => [Project])
  async projects(
    @graphql.Args() args: ProjectFindManyArgs
  ): Promise<Project[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Project, { nullable: true })
  async project(
    @graphql.Args() args: ProjectFindUniqueArgs
  ): Promise<Project | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => Project)
  async createProject(
    @graphql.Args() args: CreateProjectArgs
  ): Promise<Project> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        partner: args.data.partner
          ? {
              connect: args.data.partner,
            }
          : undefined,
      },
    });
  }

  @Public()
  @graphql.Mutation(() => Project)
  async updateProject(
    @graphql.Args() args: UpdateProjectArgs
  ): Promise<Project | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          partner: args.data.partner
            ? {
                connect: args.data.partner,
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
  @graphql.Mutation(() => Project)
  async deleteProject(
    @graphql.Args() args: DeleteProjectArgs
  ): Promise<Project | null> {
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ClientFeedback])
  @nestAccessControl.UseRoles({
    resource: "ClientFeedback",
    action: "read",
    possession: "any",
  })
  async clientFeedbacks(
    @graphql.Parent() parent: Project,
    @graphql.Args() args: ClientFeedbackFindManyArgs
  ): Promise<ClientFeedback[]> {
    const results = await this.service.findClientFeedbacks(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => [Opportunity])
  async opportunities(
    @graphql.Parent() parent: Project,
    @graphql.Args() args: OpportunityFindManyArgs
  ): Promise<Opportunity[]> {
    const results = await this.service.findOpportunities(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => [ProjectInvolvement])
  async projectInvolvements(
    @graphql.Parent() parent: Project,
    @graphql.Args() args: ProjectInvolvementFindManyArgs
  ): Promise<ProjectInvolvement[]> {
    const results = await this.service.findProjectInvolvements(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => [User])
  async users(
    @graphql.Parent() parent: Project,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => Partner, { nullable: true })
  async partner(@graphql.Parent() parent: Project): Promise<Partner | null> {
    const result = await this.service.getPartner(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

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
import { CreateUserArgs } from "./CreateUserArgs";
import { UpdateUserArgs } from "./UpdateUserArgs";
import { DeleteUserArgs } from "./DeleteUserArgs";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserFindUniqueArgs } from "./UserFindUniqueArgs";
import { User } from "./User";
import { AwardFindManyArgs } from "../../award/base/AwardFindManyArgs";
import { Award } from "../../award/base/Award";
import { CandidateFindManyArgs } from "../../candidate/base/CandidateFindManyArgs";
import { Candidate } from "../../candidate/base/Candidate";
import { InterviewFindManyArgs } from "../../interview/base/InterviewFindManyArgs";
import { Interview } from "../../interview/base/Interview";
import { OpportunityFindManyArgs } from "../../opportunity/base/OpportunityFindManyArgs";
import { Opportunity } from "../../opportunity/base/Opportunity";
import { ProjectFindManyArgs } from "../../project/base/ProjectFindManyArgs";
import { Project } from "../../project/base/Project";
import { ProjectInvolvementFindManyArgs } from "../../projectInvolvement/base/ProjectInvolvementFindManyArgs";
import { ProjectInvolvement } from "../../projectInvolvement/base/ProjectInvolvement";
import { SkillSetFindManyArgs } from "../../skillSet/base/SkillSetFindManyArgs";
import { SkillSet } from "../../skillSet/base/SkillSet";
import { Community } from "../../community/base/Community";
import { UserService } from "../user.service";

@graphql.Resolver(() => User)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UserResolverBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _usersMeta(
    @graphql.Args() args: UserFindManyArgs
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
  @graphql.Query(() => [User])
  async users(@graphql.Args() args: UserFindManyArgs): Promise<User[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  async user(@graphql.Args() args: UserFindUniqueArgs): Promise<User | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => User)
  async createUser(@graphql.Args() args: CreateUserArgs): Promise<User> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        community: args.data.community
          ? {
              connect: args.data.community,
            }
          : undefined,
      },
    });
  }

  @Public()
  @graphql.Mutation(() => User)
  async updateUser(@graphql.Args() args: UpdateUserArgs): Promise<User | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          community: args.data.community
            ? {
                connect: args.data.community,
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
  @graphql.Mutation(() => User)
  async deleteUser(@graphql.Args() args: DeleteUserArgs): Promise<User | null> {
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
  @graphql.ResolveField(() => [Award])
  async awards(
    @graphql.Parent() parent: User,
    @graphql.Args() args: AwardFindManyArgs
  ): Promise<Award[]> {
    const results = await this.service.findAwards(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => [Candidate])
  async candidates(
    @graphql.Parent() parent: User,
    @graphql.Args() args: CandidateFindManyArgs
  ): Promise<Candidate[]> {
    const results = await this.service.findCandidates(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => [Interview])
  async interviews(
    @graphql.Parent() parent: User,
    @graphql.Args() args: InterviewFindManyArgs
  ): Promise<Interview[]> {
    const results = await this.service.findInterviews(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => [Opportunity])
  async mappedPerson(
    @graphql.Parent() parent: User,
    @graphql.Args() args: OpportunityFindManyArgs
  ): Promise<Opportunity[]> {
    const results = await this.service.findMappedPerson(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => [Opportunity])
  async opportunities(
    @graphql.Parent() parent: User,
    @graphql.Args() args: OpportunityFindManyArgs
  ): Promise<Opportunity[]> {
    const results = await this.service.findOpportunities(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => [Project])
  async project(
    @graphql.Parent() parent: User,
    @graphql.Args() args: ProjectFindManyArgs
  ): Promise<Project[]> {
    const results = await this.service.findProject(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ProjectInvolvement])
  @nestAccessControl.UseRoles({
    resource: "ProjectInvolvement",
    action: "read",
    possession: "any",
  })
  async projectInvolved(
    @graphql.Parent() parent: User,
    @graphql.Args() args: ProjectInvolvementFindManyArgs
  ): Promise<ProjectInvolvement[]> {
    const results = await this.service.findProjectInvolved(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => [SkillSet])
  async skillSets(
    @graphql.Parent() parent: User,
    @graphql.Args() args: SkillSetFindManyArgs
  ): Promise<SkillSet[]> {
    const results = await this.service.findSkillSets(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => [Award])
  async toPerson(
    @graphql.Parent() parent: User,
    @graphql.Args() args: AwardFindManyArgs
  ): Promise<Award[]> {
    const results = await this.service.findToPerson(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => Community, { nullable: true })
  async community(@graphql.Parent() parent: User): Promise<Community | null> {
    const result = await this.service.getCommunity(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

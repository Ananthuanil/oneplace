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
import { CreateSkillSetArgs } from "./CreateSkillSetArgs";
import { UpdateSkillSetArgs } from "./UpdateSkillSetArgs";
import { DeleteSkillSetArgs } from "./DeleteSkillSetArgs";
import { SkillSetFindManyArgs } from "./SkillSetFindManyArgs";
import { SkillSetFindUniqueArgs } from "./SkillSetFindUniqueArgs";
import { SkillSet } from "./SkillSet";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { Candidate } from "../../candidate/base/Candidate";
import { InterviewFeedback } from "../../interviewFeedback/base/InterviewFeedback";
import { Skill } from "../../skill/base/Skill";
import { SkillSetService } from "../skillSet.service";

@graphql.Resolver(() => SkillSet)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SkillSetResolverBase {
  constructor(
    protected readonly service: SkillSetService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _skillSetsMeta(
    @graphql.Args() args: SkillSetFindManyArgs
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
  @graphql.Query(() => [SkillSet])
  async skillSets(
    @graphql.Args() args: SkillSetFindManyArgs
  ): Promise<SkillSet[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => SkillSet, { nullable: true })
  async skillSet(
    @graphql.Args() args: SkillSetFindUniqueArgs
  ): Promise<SkillSet | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => SkillSet)
  async createSkillSet(
    @graphql.Args() args: CreateSkillSetArgs
  ): Promise<SkillSet> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        candidate: args.data.candidate
          ? {
              connect: args.data.candidate,
            }
          : undefined,

        interviewFeedback: args.data.interviewFeedback
          ? {
              connect: args.data.interviewFeedback,
            }
          : undefined,

        skill: args.data.skill
          ? {
              connect: args.data.skill,
            }
          : undefined,
      },
    });
  }

  @Public()
  @graphql.Mutation(() => SkillSet)
  async updateSkillSet(
    @graphql.Args() args: UpdateSkillSetArgs
  ): Promise<SkillSet | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          candidate: args.data.candidate
            ? {
                connect: args.data.candidate,
              }
            : undefined,

          interviewFeedback: args.data.interviewFeedback
            ? {
                connect: args.data.interviewFeedback,
              }
            : undefined,

          skill: args.data.skill
            ? {
                connect: args.data.skill,
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
  @graphql.Mutation(() => SkillSet)
  async deleteSkillSet(
    @graphql.Args() args: DeleteSkillSetArgs
  ): Promise<SkillSet | null> {
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
  @graphql.ResolveField(() => [User])
  async employees(
    @graphql.Parent() parent: SkillSet,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findEmployees(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => Candidate, { nullable: true })
  async candidate(
    @graphql.Parent() parent: SkillSet
  ): Promise<Candidate | null> {
    const result = await this.service.getCandidate(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.ResolveField(() => InterviewFeedback, { nullable: true })
  async interviewFeedback(
    @graphql.Parent() parent: SkillSet
  ): Promise<InterviewFeedback | null> {
    const result = await this.service.getInterviewFeedback(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.ResolveField(() => Skill, { nullable: true })
  async skill(@graphql.Parent() parent: SkillSet): Promise<Skill | null> {
    const result = await this.service.getSkill(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

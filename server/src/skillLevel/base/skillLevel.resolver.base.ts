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
import { CreateSkillLevelArgs } from "./CreateSkillLevelArgs";
import { UpdateSkillLevelArgs } from "./UpdateSkillLevelArgs";
import { DeleteSkillLevelArgs } from "./DeleteSkillLevelArgs";
import { SkillLevelFindManyArgs } from "./SkillLevelFindManyArgs";
import { SkillLevelFindUniqueArgs } from "./SkillLevelFindUniqueArgs";
import { SkillLevel } from "./SkillLevel";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { InterviewFeedback } from "../../interviewFeedback/base/InterviewFeedback";
import { Skill } from "../../skill/base/Skill";
import { SkillLevelService } from "../skillLevel.service";

@graphql.Resolver(() => SkillLevel)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SkillLevelResolverBase {
  constructor(
    protected readonly service: SkillLevelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _skillLevelsMeta(
    @graphql.Args() args: SkillLevelFindManyArgs
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
  @graphql.Query(() => [SkillLevel])
  async skillLevels(
    @graphql.Args() args: SkillLevelFindManyArgs
  ): Promise<SkillLevel[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => SkillLevel, { nullable: true })
  async skillLevel(
    @graphql.Args() args: SkillLevelFindUniqueArgs
  ): Promise<SkillLevel | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => SkillLevel)
  async createSkillLevel(
    @graphql.Args() args: CreateSkillLevelArgs
  ): Promise<SkillLevel> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

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
  @graphql.Mutation(() => SkillLevel)
  async updateSkillLevel(
    @graphql.Args() args: UpdateSkillLevelArgs
  ): Promise<SkillLevel | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

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
  @graphql.Mutation(() => SkillLevel)
  async deleteSkillLevel(
    @graphql.Args() args: DeleteSkillLevelArgs
  ): Promise<SkillLevel | null> {
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
  async users(
    @graphql.Parent() parent: SkillLevel,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => InterviewFeedback, { nullable: true })
  async interviewFeedback(
    @graphql.Parent() parent: SkillLevel
  ): Promise<InterviewFeedback | null> {
    const result = await this.service.getInterviewFeedback(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.ResolveField(() => Skill, { nullable: true })
  async skill(@graphql.Parent() parent: SkillLevel): Promise<Skill | null> {
    const result = await this.service.getSkill(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

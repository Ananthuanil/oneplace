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
import { CreateCommunityActivityFeedbackArgs } from "./CreateCommunityActivityFeedbackArgs";
import { UpdateCommunityActivityFeedbackArgs } from "./UpdateCommunityActivityFeedbackArgs";
import { DeleteCommunityActivityFeedbackArgs } from "./DeleteCommunityActivityFeedbackArgs";
import { CommunityActivityFeedbackFindManyArgs } from "./CommunityActivityFeedbackFindManyArgs";
import { CommunityActivityFeedbackFindUniqueArgs } from "./CommunityActivityFeedbackFindUniqueArgs";
import { CommunityActivityFeedback } from "./CommunityActivityFeedback";
import { CommunityActivity } from "../../communityActivity/base/CommunityActivity";
import { User } from "../../user/base/User";
import { CommunityActivityFeedbackService } from "../communityActivityFeedback.service";

@graphql.Resolver(() => CommunityActivityFeedback)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CommunityActivityFeedbackResolverBase {
  constructor(
    protected readonly service: CommunityActivityFeedbackService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _communityActivityFeedbacksMeta(
    @graphql.Args() args: CommunityActivityFeedbackFindManyArgs
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
  @graphql.Query(() => [CommunityActivityFeedback])
  async communityActivityFeedbacks(
    @graphql.Args() args: CommunityActivityFeedbackFindManyArgs
  ): Promise<CommunityActivityFeedback[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => CommunityActivityFeedback, { nullable: true })
  async communityActivityFeedback(
    @graphql.Args() args: CommunityActivityFeedbackFindUniqueArgs
  ): Promise<CommunityActivityFeedback | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => CommunityActivityFeedback)
  async createCommunityActivityFeedback(
    @graphql.Args() args: CreateCommunityActivityFeedbackArgs
  ): Promise<CommunityActivityFeedback> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        activity: args.data.activity
          ? {
              connect: args.data.activity,
            }
          : undefined,

        employee: {
          connect: args.data.employee,
        },
      },
    });
  }

  @Public()
  @graphql.Mutation(() => CommunityActivityFeedback)
  async updateCommunityActivityFeedback(
    @graphql.Args() args: UpdateCommunityActivityFeedbackArgs
  ): Promise<CommunityActivityFeedback | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          activity: args.data.activity
            ? {
                connect: args.data.activity,
              }
            : undefined,

          employee: {
            connect: args.data.employee,
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

  @Public()
  @graphql.Mutation(() => CommunityActivityFeedback)
  async deleteCommunityActivityFeedback(
    @graphql.Args() args: DeleteCommunityActivityFeedbackArgs
  ): Promise<CommunityActivityFeedback | null> {
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
  @graphql.ResolveField(() => CommunityActivity, { nullable: true })
  async activity(
    @graphql.Parent() parent: CommunityActivityFeedback
  ): Promise<CommunityActivity | null> {
    const result = await this.service.getActivity(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.ResolveField(() => User, { nullable: true })
  async employee(
    @graphql.Parent() parent: CommunityActivityFeedback
  ): Promise<User | null> {
    const result = await this.service.getEmployee(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
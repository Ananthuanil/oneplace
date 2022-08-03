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
import { CreateCommunityArgs } from "./CreateCommunityArgs";
import { UpdateCommunityArgs } from "./UpdateCommunityArgs";
import { DeleteCommunityArgs } from "./DeleteCommunityArgs";
import { CommunityFindManyArgs } from "./CommunityFindManyArgs";
import { CommunityFindUniqueArgs } from "./CommunityFindUniqueArgs";
import { Community } from "./Community";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { CommunityService } from "../community.service";

@graphql.Resolver(() => Community)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CommunityResolverBase {
  constructor(
    protected readonly service: CommunityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _communitiesMeta(
    @graphql.Args() args: CommunityFindManyArgs
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
  @graphql.Query(() => [Community])
  async communities(
    @graphql.Args() args: CommunityFindManyArgs
  ): Promise<Community[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Community, { nullable: true })
  async community(
    @graphql.Args() args: CommunityFindUniqueArgs
  ): Promise<Community | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => Community)
  async createCommunity(
    @graphql.Args() args: CreateCommunityArgs
  ): Promise<Community> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @Public()
  @graphql.Mutation(() => Community)
  async updateCommunity(
    @graphql.Args() args: UpdateCommunityArgs
  ): Promise<Community | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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
  @graphql.Mutation(() => Community)
  async deleteCommunity(
    @graphql.Args() args: DeleteCommunityArgs
  ): Promise<Community | null> {
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
  @graphql.ResolveField(() => [User])
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async users(
    @graphql.Parent() parent: Community,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}

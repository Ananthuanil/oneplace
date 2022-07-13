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
import { CreateAwardArgs } from "./CreateAwardArgs";
import { UpdateAwardArgs } from "./UpdateAwardArgs";
import { DeleteAwardArgs } from "./DeleteAwardArgs";
import { AwardFindManyArgs } from "./AwardFindManyArgs";
import { AwardFindUniqueArgs } from "./AwardFindUniqueArgs";
import { Award } from "./Award";
import { User } from "../../user/base/User";
import { AwardService } from "../award.service";

@graphql.Resolver(() => Award)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AwardResolverBase {
  constructor(
    protected readonly service: AwardService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Award",
    action: "read",
    possession: "any",
  })
  async _awardsMeta(
    @graphql.Args() args: AwardFindManyArgs
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
  @graphql.Query(() => [Award])
  @nestAccessControl.UseRoles({
    resource: "Award",
    action: "read",
    possession: "any",
  })
  async awards(@graphql.Args() args: AwardFindManyArgs): Promise<Award[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Award, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Award",
    action: "read",
    possession: "own",
  })
  async award(
    @graphql.Args() args: AwardFindUniqueArgs
  ): Promise<Award | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Award)
  @nestAccessControl.UseRoles({
    resource: "Award",
    action: "create",
    possession: "any",
  })
  async createAward(@graphql.Args() args: CreateAwardArgs): Promise<Award> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        fromPerson: args.data.fromPerson
          ? {
              connect: args.data.fromPerson,
            }
          : undefined,

        toPerson: args.data.toPerson
          ? {
              connect: args.data.toPerson,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Award)
  @nestAccessControl.UseRoles({
    resource: "Award",
    action: "update",
    possession: "any",
  })
  async updateAward(
    @graphql.Args() args: UpdateAwardArgs
  ): Promise<Award | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          fromPerson: args.data.fromPerson
            ? {
                connect: args.data.fromPerson,
              }
            : undefined,

          toPerson: args.data.toPerson
            ? {
                connect: args.data.toPerson,
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

  @graphql.Mutation(() => Award)
  @nestAccessControl.UseRoles({
    resource: "Award",
    action: "delete",
    possession: "any",
  })
  async deleteAward(
    @graphql.Args() args: DeleteAwardArgs
  ): Promise<Award | null> {
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
  async fromPerson(@graphql.Parent() parent: Award): Promise<User | null> {
    const result = await this.service.getFromPerson(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.ResolveField(() => User, { nullable: true })
  async toPerson(@graphql.Parent() parent: Award): Promise<User | null> {
    const result = await this.service.getToPerson(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

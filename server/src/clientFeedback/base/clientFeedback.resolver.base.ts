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
import { CreateClientFeedbackArgs } from "./CreateClientFeedbackArgs";
import { UpdateClientFeedbackArgs } from "./UpdateClientFeedbackArgs";
import { DeleteClientFeedbackArgs } from "./DeleteClientFeedbackArgs";
import { ClientFeedbackFindManyArgs } from "./ClientFeedbackFindManyArgs";
import { ClientFeedbackFindUniqueArgs } from "./ClientFeedbackFindUniqueArgs";
import { ClientFeedback } from "./ClientFeedback";
import { User } from "../../user/base/User";
import { ClientFeedbackService } from "../clientFeedback.service";

@graphql.Resolver(() => ClientFeedback)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ClientFeedbackResolverBase {
  constructor(
    protected readonly service: ClientFeedbackService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _clientFeedbacksMeta(
    @graphql.Args() args: ClientFeedbackFindManyArgs
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
  @graphql.Query(() => [ClientFeedback])
  async clientFeedbacks(
    @graphql.Args() args: ClientFeedbackFindManyArgs
  ): Promise<ClientFeedback[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => ClientFeedback, { nullable: true })
  async clientFeedback(
    @graphql.Args() args: ClientFeedbackFindUniqueArgs
  ): Promise<ClientFeedback | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => ClientFeedback)
  async createClientFeedback(
    @graphql.Args() args: CreateClientFeedbackArgs
  ): Promise<ClientFeedback> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        employee: args.data.employee
          ? {
              connect: args.data.employee,
            }
          : undefined,

        organiser: args.data.organiser
          ? {
              connect: args.data.organiser,
            }
          : undefined,
      },
    });
  }

  @Public()
  @graphql.Mutation(() => ClientFeedback)
  async updateClientFeedback(
    @graphql.Args() args: UpdateClientFeedbackArgs
  ): Promise<ClientFeedback | null> {
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

          organiser: args.data.organiser
            ? {
                connect: args.data.organiser,
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
  @graphql.Mutation(() => ClientFeedback)
  async deleteClientFeedback(
    @graphql.Args() args: DeleteClientFeedbackArgs
  ): Promise<ClientFeedback | null> {
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
    @graphql.Parent() parent: ClientFeedback
  ): Promise<User | null> {
    const result = await this.service.getEmployee(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.ResolveField(() => User, { nullable: true })
  async organiser(
    @graphql.Parent() parent: ClientFeedback
  ): Promise<User | null> {
    const result = await this.service.getOrganiser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

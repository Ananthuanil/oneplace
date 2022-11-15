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
import { CreateOpportunityArgs } from "./CreateOpportunityArgs";
import { UpdateOpportunityArgs } from "./UpdateOpportunityArgs";
import { DeleteOpportunityArgs } from "./DeleteOpportunityArgs";
import { OpportunityFindManyArgs } from "./OpportunityFindManyArgs";
import { OpportunityFindUniqueArgs } from "./OpportunityFindUniqueArgs";
import { Opportunity } from "./Opportunity";
import { CandidateFindManyArgs } from "../../candidate/base/CandidateFindManyArgs";
import { Candidate } from "../../candidate/base/Candidate";
import { SkillFindManyArgs } from "../../skill/base/SkillFindManyArgs";
import { Skill } from "../../skill/base/Skill";
import { User } from "../../user/base/User";
import { Partner } from "../../partner/base/Partner";
import { Project } from "../../project/base/Project";
import { OpportunityService } from "../opportunity.service";

@graphql.Resolver(() => Opportunity)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OpportunityResolverBase {
  constructor(
    protected readonly service: OpportunityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _opportunitiesMeta(
    @graphql.Args() args: OpportunityFindManyArgs
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
  @graphql.Query(() => [Opportunity])
  async opportunities(
    @graphql.Args() args: OpportunityFindManyArgs
  ): Promise<Opportunity[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Opportunity, { nullable: true })
  async opportunity(
    @graphql.Args() args: OpportunityFindUniqueArgs
  ): Promise<Opportunity | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => Opportunity)
  async createOpportunity(
    @graphql.Args() args: CreateOpportunityArgs
  ): Promise<Opportunity> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        claimedPerson: args.data.claimedPerson
          ? {
              connect: args.data.claimedPerson,
            }
          : undefined,

        partner: args.data.partner
          ? {
              connect: args.data.partner,
            }
          : undefined,

        project: args.data.project
          ? {
              connect: args.data.project,
            }
          : undefined,
      },
    });
  }

  @Public()
  @graphql.Mutation(() => Opportunity)
  async updateOpportunity(
    @graphql.Args() args: UpdateOpportunityArgs
  ): Promise<Opportunity | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          claimedPerson: args.data.claimedPerson
            ? {
                connect: args.data.claimedPerson,
              }
            : undefined,

          partner: args.data.partner
            ? {
                connect: args.data.partner,
              }
            : undefined,

          project: args.data.project
            ? {
                connect: args.data.project,
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
  @graphql.Mutation(() => Opportunity)
  async deleteOpportunity(
    @graphql.Args() args: DeleteOpportunityArgs
  ): Promise<Opportunity | null> {
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
  @graphql.ResolveField(() => [Candidate])
  async candidates(
    @graphql.Parent() parent: Opportunity,
    @graphql.Args() args: CandidateFindManyArgs
  ): Promise<Candidate[]> {
    const results = await this.service.findCandidates(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => [Candidate])
  async mappedPerson(
    @graphql.Parent() parent: Opportunity,
    @graphql.Args() args: CandidateFindManyArgs
  ): Promise<Candidate[]> {
    const results = await this.service.findMappedPerson(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => [Skill])
  async optionalSkillset(
    @graphql.Parent() parent: Opportunity,
    @graphql.Args() args: SkillFindManyArgs
  ): Promise<Skill[]> {
    const results = await this.service.findOptionalSkillset(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => [Skill])
  async requiredSkills(
    @graphql.Parent() parent: Opportunity,
    @graphql.Args() args: SkillFindManyArgs
  ): Promise<Skill[]> {
    const results = await this.service.findRequiredSkills(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => User, { nullable: true })
  async claimedPerson(
    @graphql.Parent() parent: Opportunity
  ): Promise<User | null> {
    const result = await this.service.getClaimedPerson(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.ResolveField(() => Partner, { nullable: true })
  async partner(
    @graphql.Parent() parent: Opportunity
  ): Promise<Partner | null> {
    const result = await this.service.getPartner(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.ResolveField(() => Project, { nullable: true })
  async project(
    @graphql.Parent() parent: Opportunity
  ): Promise<Project | null> {
    const result = await this.service.getProject(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

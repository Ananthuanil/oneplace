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
import { CreateRecruitmentPartnerArgs } from "./CreateRecruitmentPartnerArgs";
import { UpdateRecruitmentPartnerArgs } from "./UpdateRecruitmentPartnerArgs";
import { DeleteRecruitmentPartnerArgs } from "./DeleteRecruitmentPartnerArgs";
import { RecruitmentPartnerFindManyArgs } from "./RecruitmentPartnerFindManyArgs";
import { RecruitmentPartnerFindUniqueArgs } from "./RecruitmentPartnerFindUniqueArgs";
import { RecruitmentPartner } from "./RecruitmentPartner";
import { CandidateFindManyArgs } from "../../candidate/base/CandidateFindManyArgs";
import { Candidate } from "../../candidate/base/Candidate";
import { RecruitmentPartnerService } from "../recruitmentPartner.service";

@graphql.Resolver(() => RecruitmentPartner)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RecruitmentPartnerResolverBase {
  constructor(
    protected readonly service: RecruitmentPartnerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _recruitmentPartnersMeta(
    @graphql.Args() args: RecruitmentPartnerFindManyArgs
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
  @graphql.Query(() => [RecruitmentPartner])
  async recruitmentPartners(
    @graphql.Args() args: RecruitmentPartnerFindManyArgs
  ): Promise<RecruitmentPartner[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => RecruitmentPartner, { nullable: true })
  async recruitmentPartner(
    @graphql.Args() args: RecruitmentPartnerFindUniqueArgs
  ): Promise<RecruitmentPartner | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => RecruitmentPartner)
  async createRecruitmentPartner(
    @graphql.Args() args: CreateRecruitmentPartnerArgs
  ): Promise<RecruitmentPartner> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @Public()
  @graphql.Mutation(() => RecruitmentPartner)
  async updateRecruitmentPartner(
    @graphql.Args() args: UpdateRecruitmentPartnerArgs
  ): Promise<RecruitmentPartner | null> {
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
  @graphql.Mutation(() => RecruitmentPartner)
  async deleteRecruitmentPartner(
    @graphql.Args() args: DeleteRecruitmentPartnerArgs
  ): Promise<RecruitmentPartner | null> {
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
    @graphql.Parent() parent: RecruitmentPartner,
    @graphql.Args() args: CandidateFindManyArgs
  ): Promise<Candidate[]> {
    const results = await this.service.findCandidates(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}

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
import { CreateCandidateArgs } from "./CreateCandidateArgs";
import { UpdateCandidateArgs } from "./UpdateCandidateArgs";
import { DeleteCandidateArgs } from "./DeleteCandidateArgs";
import { CandidateFindManyArgs } from "./CandidateFindManyArgs";
import { CandidateFindUniqueArgs } from "./CandidateFindUniqueArgs";
import { Candidate } from "./Candidate";
import { OpportunityFindManyArgs } from "../../opportunity/base/OpportunityFindManyArgs";
import { Opportunity } from "../../opportunity/base/Opportunity";
import { InterviewFindManyArgs } from "../../interview/base/InterviewFindManyArgs";
import { Interview } from "../../interview/base/Interview";
import { SkillFindManyArgs } from "../../skill/base/SkillFindManyArgs";
import { Skill } from "../../skill/base/Skill";
import { SkillSetFindManyArgs } from "../../skillSet/base/SkillSetFindManyArgs";
import { SkillSet } from "../../skillSet/base/SkillSet";
import { CommunicationFeedback } from "../../communicationFeedback/base/CommunicationFeedback";
import { RecruitmentPartner } from "../../recruitmentPartner/base/RecruitmentPartner";
import { User } from "../../user/base/User";
import { CandidateService } from "../candidate.service";

@graphql.Resolver(() => Candidate)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CandidateResolverBase {
  constructor(
    protected readonly service: CandidateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _candidatesMeta(
    @graphql.Args() args: CandidateFindManyArgs
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
  @graphql.Query(() => [Candidate])
  async candidates(
    @graphql.Args() args: CandidateFindManyArgs
  ): Promise<Candidate[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Candidate, { nullable: true })
  async candidate(
    @graphql.Args() args: CandidateFindUniqueArgs
  ): Promise<Candidate | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => Candidate)
  async createCandidate(
    @graphql.Args() args: CreateCandidateArgs
  ): Promise<Candidate> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        communicationFeedback: args.data.communicationFeedback
          ? {
              connect: args.data.communicationFeedback,
            }
          : undefined,

        externalRecruitmentPartner: args.data.externalRecruitmentPartner
          ? {
              connect: args.data.externalRecruitmentPartner,
            }
          : undefined,

        opportunity: args.data.opportunity
          ? {
              connect: args.data.opportunity,
            }
          : undefined,

        referalEmployee: args.data.referalEmployee
          ? {
              connect: args.data.referalEmployee,
            }
          : undefined,
      },
    });
  }

  @Public()
  @graphql.Mutation(() => Candidate)
  async updateCandidate(
    @graphql.Args() args: UpdateCandidateArgs
  ): Promise<Candidate | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          communicationFeedback: args.data.communicationFeedback
            ? {
                connect: args.data.communicationFeedback,
              }
            : undefined,

          externalRecruitmentPartner: args.data.externalRecruitmentPartner
            ? {
                connect: args.data.externalRecruitmentPartner,
              }
            : undefined,

          opportunity: args.data.opportunity
            ? {
                connect: args.data.opportunity,
              }
            : undefined,

          referalEmployee: args.data.referalEmployee
            ? {
                connect: args.data.referalEmployee,
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
  @graphql.Mutation(() => Candidate)
  async deleteCandidate(
    @graphql.Args() args: DeleteCandidateArgs
  ): Promise<Candidate | null> {
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
  @graphql.ResolveField(() => [Opportunity])
  async candidateOpportunity(
    @graphql.Parent() parent: Candidate,
    @graphql.Args() args: OpportunityFindManyArgs
  ): Promise<Opportunity[]> {
    const results = await this.service.findCandidateOpportunity(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => [Interview])
  async interviews(
    @graphql.Parent() parent: Candidate,
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
  async opportunities(
    @graphql.Parent() parent: Candidate,
    @graphql.Args() args: OpportunityFindManyArgs
  ): Promise<Opportunity[]> {
    const results = await this.service.findOpportunities(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => [Skill])
  async skills(
    @graphql.Parent() parent: Candidate,
    @graphql.Args() args: SkillFindManyArgs
  ): Promise<Skill[]> {
    const results = await this.service.findSkills(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => [SkillSet])
  async skillSets(
    @graphql.Parent() parent: Candidate,
    @graphql.Args() args: SkillSetFindManyArgs
  ): Promise<SkillSet[]> {
    const results = await this.service.findSkillSets(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => CommunicationFeedback, { nullable: true })
  async communicationFeedback(
    @graphql.Parent() parent: Candidate
  ): Promise<CommunicationFeedback | null> {
    const result = await this.service.getCommunicationFeedback(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.ResolveField(() => RecruitmentPartner, { nullable: true })
  async externalRecruitmentPartner(
    @graphql.Parent() parent: Candidate
  ): Promise<RecruitmentPartner | null> {
    const result = await this.service.getExternalRecruitmentPartner(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.ResolveField(() => Opportunity, { nullable: true })
  async opportunity(
    @graphql.Parent() parent: Candidate
  ): Promise<Opportunity | null> {
    const result = await this.service.getOpportunity(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.ResolveField(() => User, { nullable: true })
  async referalEmployee(
    @graphql.Parent() parent: Candidate
  ): Promise<User | null> {
    const result = await this.service.getReferalEmployee(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

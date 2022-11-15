/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";

import {
  Prisma,
  User,
  Award,
  Candidate,
  ClientFeedback,
  Community,
  CommunityActivityFeedback,
  EmployeeFeedback,
  Interview,
  Opportunity,
  Project,
  ProjectInvolvement,
  SkillSet,
  SkillLevel,
} from "@prisma/client";

import { PasswordService } from "../../auth/password.service";
import { transformStringFieldUpdateInput } from "../../prisma.util";

export class UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {}

  async count<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<number> {
    return this.prisma.user.count(args);
  }

  async findMany<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<User[]> {
    return this.prisma.user.findMany(args);
  }
  async findOne<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>
  ): Promise<User | null> {
    return this.prisma.user.findUnique(args);
  }
  async create<T extends Prisma.UserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>
  ): Promise<User> {
    return this.prisma.user.create<T>({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
  }
  async update<T extends Prisma.UserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>
  ): Promise<User> {
    return this.prisma.user.update<T>({
      ...args,

      data: {
        ...args.data,

        password:
          args.data.password &&
          (await transformStringFieldUpdateInput(
            args.data.password,
            (password) => this.passwordService.hash(password)
          )),
      },
    });
  }
  async delete<T extends Prisma.UserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>
  ): Promise<User> {
    return this.prisma.user.delete(args);
  }

  async findAwards(
    parentId: string,
    args: Prisma.AwardFindManyArgs
  ): Promise<Award[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .awards(args);
  }

  async findCandidates(
    parentId: string,
    args: Prisma.CandidateFindManyArgs
  ): Promise<Candidate[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .candidates(args);
  }

  async findClientFeedbacks(
    parentId: string,
    args: Prisma.ClientFeedbackFindManyArgs
  ): Promise<ClientFeedback[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .clientFeedbacks(args);
  }

  async findCommunities(
    parentId: string,
    args: Prisma.CommunityFindManyArgs
  ): Promise<Community[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .communities(args);
  }

  async findCommunityActivityFeedbacks(
    parentId: string,
    args: Prisma.CommunityActivityFeedbackFindManyArgs
  ): Promise<CommunityActivityFeedback[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .communityActivityFeedbacks(args);
  }

  async findEmployeeFeedbacks(
    parentId: string,
    args: Prisma.EmployeeFeedbackFindManyArgs
  ): Promise<EmployeeFeedback[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .employeeFeedbacks(args);
  }

  async findInterviews(
    parentId: string,
    args: Prisma.InterviewFindManyArgs
  ): Promise<Interview[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .interviews(args);
  }

  async findOpportunities(
    parentId: string,
    args: Prisma.OpportunityFindManyArgs
  ): Promise<Opportunity[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .opportunities(args);
  }

  async findProject(
    parentId: string,
    args: Prisma.ProjectFindManyArgs
  ): Promise<Project[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .project(args);
  }

  async findProjectInvolved(
    parentId: string,
    args: Prisma.ProjectInvolvementFindManyArgs
  ): Promise<ProjectInvolvement[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .projectInvolved(args);
  }

  async findReviewer(
    parentId: string,
    args: Prisma.EmployeeFeedbackFindManyArgs
  ): Promise<EmployeeFeedback[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .reviewer(args);
  }

  async findSkillSets(
    parentId: string,
    args: Prisma.SkillSetFindManyArgs
  ): Promise<SkillSet[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .skillSets(args);
  }

  async findToPerson(
    parentId: string,
    args: Prisma.AwardFindManyArgs
  ): Promise<Award[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .toPerson(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .users(args);
  }

  async getCommunity(parentId: string): Promise<Community | null> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .community();
  }

  async getCommunityMentor(parentId: string): Promise<User | null> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .communityMentor();
  }

  async getSkillLevel(parentId: string): Promise<SkillLevel | null> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .skillLevel();
  }
}

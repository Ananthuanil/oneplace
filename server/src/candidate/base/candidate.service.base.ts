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
  Candidate,
  Interview,
  Skill,
  SkillSet,
  Opportunity,
  User,
} from "@prisma/client";

export class CandidateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CandidateFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidateFindManyArgs>
  ): Promise<number> {
    return this.prisma.candidate.count(args);
  }

  async findMany<T extends Prisma.CandidateFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidateFindManyArgs>
  ): Promise<Candidate[]> {
    return this.prisma.candidate.findMany(args);
  }
  async findOne<T extends Prisma.CandidateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidateFindUniqueArgs>
  ): Promise<Candidate | null> {
    return this.prisma.candidate.findUnique(args);
  }
  async create<T extends Prisma.CandidateCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidateCreateArgs>
  ): Promise<Candidate> {
    return this.prisma.candidate.create<T>(args);
  }
  async update<T extends Prisma.CandidateUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidateUpdateArgs>
  ): Promise<Candidate> {
    return this.prisma.candidate.update<T>(args);
  }
  async delete<T extends Prisma.CandidateDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CandidateDeleteArgs>
  ): Promise<Candidate> {
    return this.prisma.candidate.delete(args);
  }

  async findInterviews(
    parentId: string,
    args: Prisma.InterviewFindManyArgs
  ): Promise<Interview[]> {
    return this.prisma.candidate
      .findUnique({
        where: { id: parentId },
      })
      .interviews(args);
  }

  async findSkills(
    parentId: string,
    args: Prisma.SkillFindManyArgs
  ): Promise<Skill[]> {
    return this.prisma.candidate
      .findUnique({
        where: { id: parentId },
      })
      .skills(args);
  }

  async findSkillSets(
    parentId: string,
    args: Prisma.SkillSetFindManyArgs
  ): Promise<SkillSet[]> {
    return this.prisma.candidate
      .findUnique({
        where: { id: parentId },
      })
      .skillSets(args);
  }

  async getOpportunity(parentId: string): Promise<Opportunity | null> {
    return this.prisma.candidate
      .findUnique({
        where: { id: parentId },
      })
      .opportunity();
  }

  async getReferalEmployee(parentId: string): Promise<User | null> {
    return this.prisma.candidate
      .findUnique({
        where: { id: parentId },
      })
      .referalEmployee();
  }
}

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Community, User } from "@prisma/client";

export class CommunityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CommunityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommunityFindManyArgs>
  ): Promise<number> {
    return this.prisma.community.count(args);
  }

  async findMany<T extends Prisma.CommunityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommunityFindManyArgs>
  ): Promise<Community[]> {
    return this.prisma.community.findMany(args);
  }
  async findOne<T extends Prisma.CommunityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommunityFindUniqueArgs>
  ): Promise<Community | null> {
    return this.prisma.community.findUnique(args);
  }
  async create<T extends Prisma.CommunityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommunityCreateArgs>
  ): Promise<Community> {
    return this.prisma.community.create<T>(args);
  }
  async update<T extends Prisma.CommunityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommunityUpdateArgs>
  ): Promise<Community> {
    return this.prisma.community.update<T>(args);
  }
  async delete<T extends Prisma.CommunityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommunityDeleteArgs>
  ): Promise<Community> {
    return this.prisma.community.delete(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.community
      .findUnique({
        where: { id: parentId },
      })
      .users(args);
  }
}

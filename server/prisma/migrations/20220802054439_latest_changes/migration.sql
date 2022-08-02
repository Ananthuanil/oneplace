/*
  Warnings:

  - You are about to drop the column `opportunityId` on the `SkillSet` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "EnumOpportunitySource" AS ENUM ('New', 'BackFill');

-- DropForeignKey
ALTER TABLE "SkillSet" DROP CONSTRAINT "SkillSet_opportunityId_fkey";

-- AlterTable
ALTER TABLE "Opportunity" ADD COLUMN     "resumeId" TEXT,
ADD COLUMN     "source" "EnumOpportunitySource",
ADD COLUMN     "winOdds" INTEGER;

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "opportunityId" TEXT,
ADD COLUMN     "oppurtunatyRequiredSkillsId" TEXT;

-- AlterTable
ALTER TABLE "SkillSet" DROP COLUMN "opportunityId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "folderLink" TEXT,
ADD COLUMN     "resumeLink" TEXT;

-- CreateTable
CREATE TABLE "ProjectInvolvement" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "involvementPercentage" INTEGER,
    "projectId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "ProjectInvolvement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_opportunityId_fkey" FOREIGN KEY ("opportunityId") REFERENCES "Opportunity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_oppurtunatyRequiredSkillsId_fkey" FOREIGN KEY ("oppurtunatyRequiredSkillsId") REFERENCES "Opportunity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectInvolvement" ADD CONSTRAINT "ProjectInvolvement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectInvolvement" ADD CONSTRAINT "ProjectInvolvement_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

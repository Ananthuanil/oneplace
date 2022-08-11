/*
  Warnings:

  - You are about to drop the column `interviewId` on the `SkillLevel` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "SkillLevel" DROP CONSTRAINT "SkillLevel_interviewId_fkey";

-- AlterTable
ALTER TABLE "SkillLevel" DROP COLUMN "interviewId",
ADD COLUMN     "interviewFeedbackId" TEXT;

-- AddForeignKey
ALTER TABLE "SkillLevel" ADD CONSTRAINT "SkillLevel_interviewFeedbackId_fkey" FOREIGN KEY ("interviewFeedbackId") REFERENCES "InterviewFeedback"("id") ON DELETE SET NULL ON UPDATE CASCADE;

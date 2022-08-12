/*
  Warnings:

  - You are about to drop the column `careerOutDate` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "careerOutDate",
ADD COLUMN     "previousFirmOutDate" TIMESTAMP(3),
ADD COLUMN     "skillLevelId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_skillLevelId_fkey" FOREIGN KEY ("skillLevelId") REFERENCES "SkillLevel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

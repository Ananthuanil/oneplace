/*
  Warnings:

  - You are about to drop the column `opportunityId` on the `Interview` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Skill` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `Skill` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Interview" DROP CONSTRAINT "Interview_opportunityId_fkey";

-- AlterTable
ALTER TABLE "Candidate" ADD COLUMN     "opportunityId" TEXT;

-- AlterTable
ALTER TABLE "Interview" DROP COLUMN "opportunityId";

-- AlterTable
ALTER TABLE "Skill" ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_opportunityId_fkey" FOREIGN KEY ("opportunityId") REFERENCES "Opportunity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

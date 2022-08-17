/*
  Warnings:

  - You are about to drop the column `candidateId` on the `Skill` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_candidateId_fkey";

-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "candidateId";

-- CreateTable
CREATE TABLE "_CandidateToSkill" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CandidateToSkill_AB_unique" ON "_CandidateToSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_CandidateToSkill_B_index" ON "_CandidateToSkill"("B");

-- AddForeignKey
ALTER TABLE "_CandidateToSkill" ADD CONSTRAINT "_CandidateToSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "Candidate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CandidateToSkill" ADD CONSTRAINT "_CandidateToSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

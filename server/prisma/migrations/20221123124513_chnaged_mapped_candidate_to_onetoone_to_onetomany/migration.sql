/*
  Warnings:

  - You are about to drop the column `mappedCandidatesId` on the `Opportunity` table. All the data in the column will be lost.
  - You are about to drop the column `mappedEmployeeId` on the `Opportunity` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Opportunity" DROP CONSTRAINT "Opportunity_mappedCandidatesId_fkey";

-- DropForeignKey
ALTER TABLE "Opportunity" DROP CONSTRAINT "Opportunity_mappedEmployeeId_fkey";

-- AlterTable
ALTER TABLE "Opportunity" DROP COLUMN "mappedCandidatesId",
DROP COLUMN "mappedEmployeeId";

-- CreateTable
CREATE TABLE "_candidateOpportunity" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_mappedEmployee" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_candidateOpportunity_AB_unique" ON "_candidateOpportunity"("A", "B");

-- CreateIndex
CREATE INDEX "_candidateOpportunity_B_index" ON "_candidateOpportunity"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_mappedEmployee_AB_unique" ON "_mappedEmployee"("A", "B");

-- CreateIndex
CREATE INDEX "_mappedEmployee_B_index" ON "_mappedEmployee"("B");

-- AddForeignKey
ALTER TABLE "_candidateOpportunity" ADD CONSTRAINT "_candidateOpportunity_A_fkey" FOREIGN KEY ("A") REFERENCES "Candidate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_candidateOpportunity" ADD CONSTRAINT "_candidateOpportunity_B_fkey" FOREIGN KEY ("B") REFERENCES "Opportunity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_mappedEmployee" ADD CONSTRAINT "_mappedEmployee_A_fkey" FOREIGN KEY ("A") REFERENCES "Opportunity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_mappedEmployee" ADD CONSTRAINT "_mappedEmployee_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

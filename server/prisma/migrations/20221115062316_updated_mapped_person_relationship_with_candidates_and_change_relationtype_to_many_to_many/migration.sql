/*
  Warnings:

  - You are about to drop the column `mappedPersonId` on the `Opportunity` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Opportunity" DROP CONSTRAINT "Opportunity_mappedPersonId_fkey";

-- AlterTable
ALTER TABLE "Opportunity" DROP COLUMN "mappedPersonId";

-- CreateTable
CREATE TABLE "_mappedPerson" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_mappedPerson_AB_unique" ON "_mappedPerson"("A", "B");

-- CreateIndex
CREATE INDEX "_mappedPerson_B_index" ON "_mappedPerson"("B");

-- AddForeignKey
ALTER TABLE "_mappedPerson" ADD CONSTRAINT "_mappedPerson_A_fkey" FOREIGN KEY ("A") REFERENCES "Candidate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_mappedPerson" ADD CONSTRAINT "_mappedPerson_B_fkey" FOREIGN KEY ("B") REFERENCES "Opportunity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

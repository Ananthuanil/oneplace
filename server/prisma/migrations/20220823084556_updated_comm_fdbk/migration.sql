/*
  Warnings:

  - You are about to drop the column `communicationFeedbackId` on the `Candidate` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[candidatesId]` on the table `CommunicationFeedback` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Candidate" DROP CONSTRAINT "Candidate_communicationFeedbackId_fkey";

-- AlterTable
ALTER TABLE "Candidate" DROP COLUMN "communicationFeedbackId";

-- AlterTable
ALTER TABLE "CommunicationFeedback" ADD COLUMN     "candidatesId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "CommunicationFeedback_candidatesId_key" ON "CommunicationFeedback"("candidatesId");

-- AddForeignKey
ALTER TABLE "CommunicationFeedback" ADD CONSTRAINT "CommunicationFeedback_candidatesId_fkey" FOREIGN KEY ("candidatesId") REFERENCES "Candidate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

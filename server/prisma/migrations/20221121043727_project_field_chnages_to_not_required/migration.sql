/*
  Warnings:

  - You are about to drop the column `projectId` on the `ClientFeedback` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClientFeedback" DROP CONSTRAINT "ClientFeedback_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "ClientFeedback" DROP CONSTRAINT "ClientFeedback_projectId_fkey";

-- AlterTable
ALTER TABLE "ClientFeedback" DROP COLUMN "projectId",
ADD COLUMN     "project" TEXT,
ALTER COLUMN "employeeId" DROP NOT NULL,
ALTER COLUMN "meetingEtiquite" DROP NOT NULL,
ALTER COLUMN "processGovernance" DROP NOT NULL,
ALTER COLUMN "qualityOfDeliverables" DROP NOT NULL,
ALTER COLUMN "reviewerEmail" DROP NOT NULL,
ALTER COLUMN "role" DROP NOT NULL,
ALTER COLUMN "teamWork" DROP NOT NULL,
ALTER COLUMN "technicalExpertise" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ClientFeedback" ADD CONSTRAINT "ClientFeedback_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - The values [onHold,selected,rejected] on the enum `EnumCandidateCurrentStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `status` on the `Opportunity` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "EnumInterviewCurrentStatus" AS ENUM ('Scheduled', 'CompletedButAwaitingFeedback', 'Rescheduled', 'Rejected', 'Accepted');

-- CreateEnum
CREATE TYPE "EnumOpportunityCurrentStatus" AS ENUM ('Lead', 'OpenOppurtunaty', 'NotQualifiedLead', 'Replacement', 'MappedAndAwaitingInterviewSlot', 'AwaitingInterviewFeedback', 'OnHold', 'Won', 'Failed');

-- AlterEnum
BEGIN;
CREATE TYPE "EnumCandidateCurrentStatus_new" AS ENUM ('Parked', 'AwaitingInterview', 'InterviewScheduled', 'InterviewSelected', 'OfferReleased', 'Joined', 'OfferRejected');
ALTER TABLE "Candidate" ALTER COLUMN "currentStatus" TYPE "EnumCandidateCurrentStatus_new" USING ("currentStatus"::text::"EnumCandidateCurrentStatus_new");
ALTER TYPE "EnumCandidateCurrentStatus" RENAME TO "EnumCandidateCurrentStatus_old";
ALTER TYPE "EnumCandidateCurrentStatus_new" RENAME TO "EnumCandidateCurrentStatus";
DROP TYPE "EnumCandidateCurrentStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "Interview" ADD COLUMN     "currentStatus" "EnumInterviewCurrentStatus";

-- AlterTable
ALTER TABLE "Opportunity" DROP COLUMN "status",
ADD COLUMN     "currentStatus" "EnumOpportunityCurrentStatus";

-- DropEnum
DROP TYPE "EnumOpportunityStatus";

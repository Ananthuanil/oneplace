/*
  Warnings:

  - The `currentStatus` column on the `Interview` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `currentStatus` column on the `Opportunity` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `currentStatus` on the `Candidate` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Candidate" DROP COLUMN "currentStatus",
ADD COLUMN     "currentStatus" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Interview" DROP COLUMN "currentStatus",
ADD COLUMN     "currentStatus" TEXT;

-- AlterTable
ALTER TABLE "Opportunity" DROP COLUMN "currentStatus",
ADD COLUMN     "currentStatus" TEXT;

-- DropEnum
DROP TYPE "EnumCandidateCurrentStatus";

-- DropEnum
DROP TYPE "EnumInterviewCurrentStatus";

-- DropEnum
DROP TYPE "EnumOpportunityCurrentStatus";

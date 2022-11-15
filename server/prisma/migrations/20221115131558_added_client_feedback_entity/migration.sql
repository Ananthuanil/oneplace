-- CreateEnum
CREATE TYPE "EnumClientFeedbackStatus" AS ENUM ('LinkGenerated', 'WaitingForFeedback', 'FeedbackReceived');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "communityMentorId" TEXT;

-- CreateTable
CREATE TABLE "ClientFeedback" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "detailedFeedback" TEXT,
    "employeeId" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "improvementNeeded" TEXT,
    "meetingEtiquite" INTEGER NOT NULL,
    "processGovernance" INTEGER NOT NULL,
    "projectId" TEXT,
    "qualityOfDeliverables" INTEGER NOT NULL,
    "reportingManager" TEXT,
    "reviewerEmail" TEXT NOT NULL,
    "reviewerName" TEXT,
    "role" TEXT NOT NULL,
    "status" "EnumClientFeedbackStatus",
    "teamWork" INTEGER NOT NULL,
    "technicalExpertise" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClientFeedback_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_communityMentorId_fkey" FOREIGN KEY ("communityMentorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientFeedback" ADD CONSTRAINT "ClientFeedback_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientFeedback" ADD CONSTRAINT "ClientFeedback_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

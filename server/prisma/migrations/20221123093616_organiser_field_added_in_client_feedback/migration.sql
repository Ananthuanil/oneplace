-- AlterTable
ALTER TABLE "ClientFeedback" ADD COLUMN     "organiserId" TEXT;

-- AlterTable
ALTER TABLE "Opportunity" ADD COLUMN     "mappedCandidatesId" TEXT,
ADD COLUMN     "mappedEmployeeId" TEXT;

-- AddForeignKey
ALTER TABLE "Opportunity" ADD CONSTRAINT "Opportunity_mappedEmployeeId_fkey" FOREIGN KEY ("mappedEmployeeId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Opportunity" ADD CONSTRAINT "Opportunity_mappedCandidatesId_fkey" FOREIGN KEY ("mappedCandidatesId") REFERENCES "Candidate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientFeedback" ADD CONSTRAINT "ClientFeedback_organiserId_fkey" FOREIGN KEY ("organiserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

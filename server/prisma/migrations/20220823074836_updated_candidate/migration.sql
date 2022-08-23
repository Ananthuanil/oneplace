-- AlterTable
ALTER TABLE "Candidate" ADD COLUMN     "communicationFeedbackId" TEXT;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_communicationFeedbackId_fkey" FOREIGN KEY ("communicationFeedbackId") REFERENCES "CommunicationFeedback"("id") ON DELETE SET NULL ON UPDATE CASCADE;

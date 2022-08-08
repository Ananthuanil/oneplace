-- CreateEnum
CREATE TYPE "EnumOpportunityProcurementStatus" AS ENUM ('new', 'replacement');

-- AlterTable
ALTER TABLE "Opportunity" ADD COLUMN     "procurementStatus" "EnumOpportunityProcurementStatus",
ADD COLUMN     "projectId" TEXT;

-- AddForeignKey
ALTER TABLE "Opportunity" ADD CONSTRAINT "Opportunity_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

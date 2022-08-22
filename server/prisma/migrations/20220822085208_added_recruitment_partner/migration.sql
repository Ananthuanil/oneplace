/*
  Warnings:

  - You are about to drop the column `externalRecruitmentPartner` on the `Candidate` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Candidate" DROP COLUMN "externalRecruitmentPartner",
ADD COLUMN     "externalRecruitmentPartnerId" TEXT;

-- CreateTable
CREATE TABLE "RecruitmentPartner" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "name" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RecruitmentPartner_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_externalRecruitmentPartnerId_fkey" FOREIGN KEY ("externalRecruitmentPartnerId") REFERENCES "RecruitmentPartner"("id") ON DELETE SET NULL ON UPDATE CASCADE;

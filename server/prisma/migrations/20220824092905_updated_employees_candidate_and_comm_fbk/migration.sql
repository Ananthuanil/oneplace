-- AlterTable
ALTER TABLE "Candidate" ALTER COLUMN "totalExperience" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "notifications" TEXT;

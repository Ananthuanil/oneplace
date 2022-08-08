/*
  Warnings:

  - The `designation` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "EnumUserDesignation" AS ENUM ('joe', 'engineer', 'seniorEngineer', 'consultant', 'seniorConsultant', 'principalConsultant', 'director', 'cxo');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "designation",
ADD COLUMN     "designation" "EnumUserDesignation";

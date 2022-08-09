/*
  Warnings:

  - The values [joe,engineer,seniorEngineer,consultant,seniorConsultant,principalConsultant,director,cxo] on the enum `EnumUserDesignation` will be removed. If these variants are still used in the database, this will fail.
  - The values [male,female,others] on the enum `EnumUserGender` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EnumUserDesignation_new" AS ENUM ('Joe', 'Engineer', 'SeniorEngineer', 'Consultant', 'SeniorConsultant', 'PrincipalConsultant', 'Director', 'Cxo');
ALTER TABLE "User" ALTER COLUMN "designation" TYPE "EnumUserDesignation_new"[] USING ("designation"::text::"EnumUserDesignation_new"[]);
ALTER TYPE "EnumUserDesignation" RENAME TO "EnumUserDesignation_old";
ALTER TYPE "EnumUserDesignation_new" RENAME TO "EnumUserDesignation";
DROP TYPE "EnumUserDesignation_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "EnumUserGender_new" AS ENUM ('Male', 'Female', 'Others');
ALTER TABLE "User" ALTER COLUMN "gender" TYPE "EnumUserGender_new" USING ("gender"::text::"EnumUserGender_new");
ALTER TYPE "EnumUserGender" RENAME TO "EnumUserGender_old";
ALTER TYPE "EnumUserGender_new" RENAME TO "EnumUserGender";
DROP TYPE "EnumUserGender_old";
COMMIT;

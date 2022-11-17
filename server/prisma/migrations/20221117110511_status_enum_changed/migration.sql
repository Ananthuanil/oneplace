/*
  Warnings:

  - The values [FeedbackError] on the enum `EnumClientFeedbackStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EnumClientFeedbackStatus_new" AS ENUM ('LinkGenerated', 'WaitingForFeedback', 'FeedbackReceived', 'NoResponse');
ALTER TABLE "ClientFeedback" ALTER COLUMN "status" TYPE "EnumClientFeedbackStatus_new" USING ("status"::text::"EnumClientFeedbackStatus_new");
ALTER TYPE "EnumClientFeedbackStatus" RENAME TO "EnumClientFeedbackStatus_old";
ALTER TYPE "EnumClientFeedbackStatus_new" RENAME TO "EnumClientFeedbackStatus";
DROP TYPE "EnumClientFeedbackStatus_old";
COMMIT;

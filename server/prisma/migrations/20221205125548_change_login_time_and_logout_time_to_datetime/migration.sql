/*
  Warnings:

  - The values [Completed] on the enum `EnumTaskStatus` will be removed. If these variants are still used in the database, this will fail.
  - The `loginTime` column on the `Attendance` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `logoutTime` column on the `Attendance` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EnumTaskStatus_new" AS ENUM ('completed', 'inProgress', 'blocker');
ALTER TABLE "Task" ALTER COLUMN "status" TYPE "EnumTaskStatus_new" USING ("status"::text::"EnumTaskStatus_new");
ALTER TYPE "EnumTaskStatus" RENAME TO "EnumTaskStatus_old";
ALTER TYPE "EnumTaskStatus_new" RENAME TO "EnumTaskStatus";
DROP TYPE "EnumTaskStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "Attendance" ADD COLUMN     "attendanceStatus" BOOLEAN,
DROP COLUMN "loginTime",
ADD COLUMN     "loginTime" TIMESTAMP(3),
DROP COLUMN "logoutTime",
ADD COLUMN     "logoutTime" TIMESTAMP(3);

-- CreateEnum
CREATE TYPE "EnumTaskStatus" AS ENUM ('Completed', 'inProgress', 'blocker');

-- CreateEnum
CREATE TYPE "EnumAttendanceOffice" AS ENUM ('mgRoad', 'infopark');

-- CreateEnum
CREATE TYPE "EnumAttendanceWorkMode" AS ENUM ('WFO', 'WFH');

-- CreateTable
CREATE TABLE "Task" (
    "attendanceId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "projectId" TEXT,
    "specification" TEXT,
    "status" "EnumTaskStatus" NOT NULL,
    "ticketId" TEXT,
    "ticketLink" TEXT,
    "ticketName" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attendance" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "loginTime" TEXT,
    "logoutTime" TEXT,
    "office" "EnumAttendanceOffice",
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "workMode" "EnumAttendanceWorkMode",

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_attendanceId_fkey" FOREIGN KEY ("attendanceId") REFERENCES "Attendance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

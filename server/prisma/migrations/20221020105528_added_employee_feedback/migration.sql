-- CreateEnum
CREATE TYPE "EnumEmployeeFeedbackNature" AS ENUM ('Positive', 'Negative', 'Neutral');

-- CreateTable
CREATE TABLE "EmployeeFeedback" (
    "area" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date" TIMESTAMP(3) NOT NULL,
    "employeeId" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "nature" "EnumEmployeeFeedbackNature" NOT NULL,
    "remark" TEXT NOT NULL,
    "reviewerId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmployeeFeedback_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EmployeeFeedback" ADD CONSTRAINT "EmployeeFeedback_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeFeedback" ADD CONSTRAINT "EmployeeFeedback_reviewerId_fkey" FOREIGN KEY ("reviewerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - A unique constraint covering the columns `[communicationId]` on the table `InterviewFeedback` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "InterviewFeedback_communicationId_key" ON "InterviewFeedback"("communicationId");

-- CreateEnum
CREATE TYPE "EnumUserGender" AS ENUM ('male', 'female', 'others');

-- CreateEnum
CREATE TYPE "EnumCandidateCategory" AS ENUM ('P1', 'P2', 'P3');

-- CreateEnum
CREATE TYPE "EnumCandidateCurrentStatus" AS ENUM ('onHold', 'selected', 'rejected');

-- CreateEnum
CREATE TYPE "EnumCandidateSource" AS ENUM ('Internal', 'Referral', 'ExternalRecruitmentPartner');

-- CreateEnum
CREATE TYPE "EnumInterviewFeedbackStatus" AS ENUM ('Passed', 'NotPassed', 'Hold');

-- CreateEnum
CREATE TYPE "EnumOpportunityStatus" AS ENUM ('Awarded', 'Mapped', 'OngoingInterview', 'Closed');

-- CreateTable
CREATE TABLE "User" (
    "aadarNumber" TEXT,
    "address" TEXT,
    "bloodGroup" TEXT,
    "careerOutDate" TIMESTAMP(3),
    "careerStartDate" TIMESTAMP(3),
    "communityId" TEXT,
    "contactNumber" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateOfJoining" TIMESTAMP(3),
    "designation" TEXT,
    "dob" TIMESTAMP(3),
    "email" TEXT,
    "emergencyContactNumber" INTEGER,
    "firstName" TEXT NOT NULL,
    "fwExperience" TEXT,
    "gender" "EnumUserGender" NOT NULL,
    "id" TEXT NOT NULL,
    "image" TEXT,
    "lastName" TEXT NOT NULL,
    "panNumber" TEXT,
    "password" TEXT NOT NULL,
    "personalEmailId" TEXT,
    "roles" TEXT[],
    "totalExperience" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Community" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "id" TEXT NOT NULL,
    "name" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Community_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "candidateId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "name" TEXT,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillSet" (
    "candidateId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expertiseLevel" INTEGER,
    "id" TEXT NOT NULL,
    "interviewFeedbackId" TEXT,
    "opportunityId" TEXT,
    "skillId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SkillSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Candidate" (
    "additionalComments" TEXT,
    "category" "EnumCandidateCategory" NOT NULL,
    "competitorCtc" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currentCtc" DOUBLE PRECISION,
    "currentDesignation" TEXT,
    "currentFirm" TEXT,
    "currentStatus" "EnumCandidateCurrentStatus" NOT NULL,
    "email" TEXT NOT NULL,
    "expectedCtc" DOUBLE PRECISION,
    "externalRecruitmentPartner" TEXT,
    "id" TEXT NOT NULL,
    "isOnNoticePeriod" BOOLEAN NOT NULL,
    "lastWorkingDay" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "noticePeriodTime" DOUBLE PRECISION,
    "referalEmployeeId" TEXT,
    "source" "EnumCandidateSource" NOT NULL,
    "totalExperience" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InterviewFeedback" (
    "attitudeFeedback" TEXT,
    "comments" TEXT,
    "communicationId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "feedback" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "interviewId" TEXT,
    "logicFeedback" TEXT,
    "relevantTechFeedback" TEXT,
    "status" "EnumInterviewFeedbackStatus",
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InterviewFeedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interview" (
    "candidateId" TEXT,
    "closed" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date" TIMESTAMP(3),
    "id" TEXT NOT NULL,
    "interviewerId" TEXT,
    "level" TEXT,
    "mode" TEXT,
    "opportunityId" TEXT,
    "subject" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Interview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Opportunity" (
    "claimedPersonId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "mappedPersonId" TEXT,
    "name" TEXT,
    "partnerId" TEXT,
    "requiredExperience" INTEGER,
    "requirements" TEXT,
    "status" "EnumOpportunityStatus",
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Opportunity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partner" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "id" TEXT NOT NULL,
    "name" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "name" TEXT,
    "partnerId" TEXT,
    "startDate" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunicationFeedback" (
    "abilityToArticulate" TEXT,
    "confidenceLevel" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "englishSpeakingSkills" TEXT,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommunicationFeedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Award" (
    "awardType" TEXT,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fromPersonId" TEXT,
    "id" TEXT NOT NULL,
    "toPersonId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Award_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SkillSetToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProjectToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "_SkillSetToUser_AB_unique" ON "_SkillSetToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_SkillSetToUser_B_index" ON "_SkillSetToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToUser_AB_unique" ON "_ProjectToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToUser_B_index" ON "_ProjectToUser"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillSet" ADD CONSTRAINT "SkillSet_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillSet" ADD CONSTRAINT "SkillSet_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillSet" ADD CONSTRAINT "SkillSet_interviewFeedbackId_fkey" FOREIGN KEY ("interviewFeedbackId") REFERENCES "InterviewFeedback"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillSet" ADD CONSTRAINT "SkillSet_opportunityId_fkey" FOREIGN KEY ("opportunityId") REFERENCES "Opportunity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_referalEmployeeId_fkey" FOREIGN KEY ("referalEmployeeId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterviewFeedback" ADD CONSTRAINT "InterviewFeedback_interviewId_fkey" FOREIGN KEY ("interviewId") REFERENCES "Interview"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterviewFeedback" ADD CONSTRAINT "InterviewFeedback_communicationId_fkey" FOREIGN KEY ("communicationId") REFERENCES "CommunicationFeedback"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_interviewerId_fkey" FOREIGN KEY ("interviewerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_opportunityId_fkey" FOREIGN KEY ("opportunityId") REFERENCES "Opportunity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Opportunity" ADD CONSTRAINT "Opportunity_claimedPersonId_fkey" FOREIGN KEY ("claimedPersonId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Opportunity" ADD CONSTRAINT "Opportunity_mappedPersonId_fkey" FOREIGN KEY ("mappedPersonId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Opportunity" ADD CONSTRAINT "Opportunity_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Award" ADD CONSTRAINT "Award_fromPersonId_fkey" FOREIGN KEY ("fromPersonId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Award" ADD CONSTRAINT "Award_toPersonId_fkey" FOREIGN KEY ("toPersonId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillSetToUser" ADD CONSTRAINT "_SkillSetToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "SkillSet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillSetToUser" ADD CONSTRAINT "_SkillSetToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToUser" ADD CONSTRAINT "_ProjectToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToUser" ADD CONSTRAINT "_ProjectToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

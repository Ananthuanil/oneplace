-- CreateTable
CREATE TABLE "CommunityActivity" (
    "communityId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommunityActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityActivityFeedback" (
    "activityId" TEXT,
    "activityFeedback" TEXT,
    "attendance" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "employeeId" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "rating" DOUBLE PRECISION,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommunityActivityFeedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_communities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_communities_AB_unique" ON "_communities"("A", "B");

-- CreateIndex
CREATE INDEX "_communities_B_index" ON "_communities"("B");

-- AddForeignKey
ALTER TABLE "CommunityActivity" ADD CONSTRAINT "CommunityActivity_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityActivityFeedback" ADD CONSTRAINT "CommunityActivityFeedback_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "CommunityActivity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityActivityFeedback" ADD CONSTRAINT "CommunityActivityFeedback_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_communities" ADD CONSTRAINT "_communities_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_communities" ADD CONSTRAINT "_communities_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

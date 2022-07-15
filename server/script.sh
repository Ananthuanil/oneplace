#!/bin/sh
#Add for intializing
#npm run db:init
#npx prisma migrate deploy
DATABASE_URL="postgresql://postgres:admin@localhost/oneplace?host=/cloudsql/cloud-run-dev-348705:us-central1:oneplace-db"  npx prisma migrate dev --preview-feature
DATABASE_URL="postgresql://postgres:admin@localhost/oneplace?host=/cloudsql/cloud-run-dev-348705:us-central1:oneplace-db"  npx prisma migrate deploy
node dist/main

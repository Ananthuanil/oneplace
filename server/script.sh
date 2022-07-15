#!/bin/sh
#Add for intializing
#npm run db:init
#npx prisma migrate deploy
npx prisma migrate dev --preview-feature
npx prisma migrate deploy
node dist/main

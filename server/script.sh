#!/bin/sh
#Add for intializing
#npm run db:init
npx prisma migrate deploy
node dist/main

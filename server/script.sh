#!/bin/sh
npx prisma migrate reslove --applied 20220715121425_init
npx prisma migrate deploy --preview-feature
node dist/main
#!/bin/sh
npx prisma migrate resolve --applied "20220715121425_init" --preview-feature
npx prisma migrate deploy --preview-feature
node dist/main
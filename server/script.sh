#!/bin/sh
npx prisma migrate deploy --preview-feature
node dist/main
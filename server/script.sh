#!/bin/sh
# npx prisma migrate resolve --applied "20220817064659_baseline_migration" --preview-feature
npx prisma migrate dev --create-only
npx prisma migrate deploy
# npm run db:clean
# npm run db:init
node dist/main
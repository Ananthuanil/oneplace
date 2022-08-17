#!/bin/sh
# npx prisma migrate resolve --applied "20220817064659_baseline_migration" --preview-feature
npx prisma migrate deploy --preview-feature
# npm run db:clean
# npm run db:init
node dist/main

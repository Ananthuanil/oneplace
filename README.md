# oneplace

### Create migrations locally
Maintain a local db to create migrations and push them to repository. Then they will be applied to production to db. 
 ```
 npx prisma migrate dev --name "<NAME_MIGRATION>" --preview-feature
 ```
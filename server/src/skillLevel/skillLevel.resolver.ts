import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SkillLevelResolverBase } from "./base/skillLevel.resolver.base";
import { SkillLevel } from "./base/SkillLevel";
import { SkillLevelService } from "./skillLevel.service";

@graphql.Resolver(() => SkillLevel)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SkillLevelResolver extends SkillLevelResolverBase {
  constructor(
    protected readonly service: SkillLevelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

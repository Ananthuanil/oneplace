import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SkillSetResolverBase } from "./base/skillSet.resolver.base";
import { SkillSet } from "./base/SkillSet";
import { SkillSetService } from "./skillSet.service";

@graphql.Resolver(() => SkillSet)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SkillSetResolver extends SkillSetResolverBase {
  constructor(
    protected readonly service: SkillSetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

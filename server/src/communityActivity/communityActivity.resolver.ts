import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CommunityActivityResolverBase } from "./base/communityActivity.resolver.base";
import { CommunityActivity } from "./base/CommunityActivity";
import { CommunityActivityService } from "./communityActivity.service";

@graphql.Resolver(() => CommunityActivity)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CommunityActivityResolver extends CommunityActivityResolverBase {
  constructor(
    protected readonly service: CommunityActivityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

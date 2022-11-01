import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CommunityActivityFeedbackResolverBase } from "./base/communityActivityFeedback.resolver.base";
import { CommunityActivityFeedback } from "./base/CommunityActivityFeedback";
import { CommunityActivityFeedbackService } from "./communityActivityFeedback.service";

@graphql.Resolver(() => CommunityActivityFeedback)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CommunityActivityFeedbackResolver extends CommunityActivityFeedbackResolverBase {
  constructor(
    protected readonly service: CommunityActivityFeedbackService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

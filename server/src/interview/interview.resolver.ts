import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { InterviewResolverBase } from "./base/interview.resolver.base";
import { Interview } from "./base/Interview";
import { InterviewService } from "./interview.service";

@graphql.Resolver(() => Interview)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class InterviewResolver extends InterviewResolverBase {
  constructor(
    protected readonly service: InterviewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

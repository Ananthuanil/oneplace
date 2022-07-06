import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { OpportunityResolverBase } from "./base/opportunity.resolver.base";
import { Opportunity } from "./base/Opportunity";
import { OpportunityService } from "./opportunity.service";

@graphql.Resolver(() => Opportunity)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OpportunityResolver extends OpportunityResolverBase {
  constructor(
    protected readonly service: OpportunityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

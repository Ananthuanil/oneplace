import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProjectInvolvementResolverBase } from "./base/projectInvolvement.resolver.base";
import { ProjectInvolvement } from "./base/ProjectInvolvement";
import { ProjectInvolvementService } from "./projectInvolvement.service";

@graphql.Resolver(() => ProjectInvolvement)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProjectInvolvementResolver extends ProjectInvolvementResolverBase {
  constructor(
    protected readonly service: ProjectInvolvementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

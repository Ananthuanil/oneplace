import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { RecruitmentPartnerResolverBase } from "./base/recruitmentPartner.resolver.base";
import { RecruitmentPartner } from "./base/RecruitmentPartner";
import { RecruitmentPartnerService } from "./recruitmentPartner.service";

@graphql.Resolver(() => RecruitmentPartner)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RecruitmentPartnerResolver extends RecruitmentPartnerResolverBase {
  constructor(
    protected readonly service: RecruitmentPartnerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

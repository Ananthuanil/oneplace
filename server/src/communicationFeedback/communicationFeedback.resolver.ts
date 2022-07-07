import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CommunicationFeedbackResolverBase } from "./base/communicationFeedback.resolver.base";
import { CommunicationFeedback } from "./base/CommunicationFeedback";
import { CommunicationFeedbackService } from "./communicationFeedback.service";

@graphql.Resolver(() => CommunicationFeedback)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CommunicationFeedbackResolver extends CommunicationFeedbackResolverBase {
  constructor(
    protected readonly service: CommunicationFeedbackService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

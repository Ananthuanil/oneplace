import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ClientFeedbackResolverBase } from "./base/clientFeedback.resolver.base";
import { ClientFeedback } from "./base/ClientFeedback";
import { ClientFeedbackService } from "./clientFeedback.service";

@graphql.Resolver(() => ClientFeedback)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ClientFeedbackResolver extends ClientFeedbackResolverBase {
  constructor(
    protected readonly service: ClientFeedbackService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

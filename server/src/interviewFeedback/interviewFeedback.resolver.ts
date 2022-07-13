import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { InterviewFeedbackResolverBase } from "./base/interviewFeedback.resolver.base";
import { InterviewFeedback } from "./base/InterviewFeedback";
import { InterviewFeedbackService } from "./interviewFeedback.service";

@graphql.Resolver(() => InterviewFeedback)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class InterviewFeedbackResolver extends InterviewFeedbackResolverBase {
  constructor(
    protected readonly service: InterviewFeedbackService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

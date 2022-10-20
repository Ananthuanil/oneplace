import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EmployeeFeedbackResolverBase } from "./base/employeeFeedback.resolver.base";
import { EmployeeFeedback } from "./base/EmployeeFeedback";
import { EmployeeFeedbackService } from "./employeeFeedback.service";

@graphql.Resolver(() => EmployeeFeedback)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EmployeeFeedbackResolver extends EmployeeFeedbackResolverBase {
  constructor(
    protected readonly service: EmployeeFeedbackService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

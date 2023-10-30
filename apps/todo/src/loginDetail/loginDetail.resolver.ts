import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LoginDetailResolverBase } from "./base/loginDetail.resolver.base";
import { LoginDetail } from "./base/LoginDetail";
import { LoginDetailService } from "./loginDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LoginDetail)
export class LoginDetailResolver extends LoginDetailResolverBase {
  constructor(
    protected readonly service: LoginDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

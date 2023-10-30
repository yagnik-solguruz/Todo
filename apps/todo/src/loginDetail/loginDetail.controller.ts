import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LoginDetailService } from "./loginDetail.service";
import { LoginDetailControllerBase } from "./base/loginDetail.controller.base";

@swagger.ApiTags("loginDetails")
@common.Controller("loginDetails")
export class LoginDetailController extends LoginDetailControllerBase {
  constructor(
    protected readonly service: LoginDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LoginDetailModuleBase } from "./base/loginDetail.module.base";
import { LoginDetailService } from "./loginDetail.service";
import { LoginDetailController } from "./loginDetail.controller";
import { LoginDetailResolver } from "./loginDetail.resolver";

@Module({
  imports: [LoginDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [LoginDetailController],
  providers: [LoginDetailService, LoginDetailResolver],
  exports: [LoginDetailService],
})
export class LoginDetailModule {}

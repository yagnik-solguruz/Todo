import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LoginDetailServiceBase } from "./base/loginDetail.service.base";

@Injectable()
export class LoginDetailService extends LoginDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

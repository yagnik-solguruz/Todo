import { LoginDetailWhereInput } from "./LoginDetailWhereInput";
import { LoginDetailOrderByInput } from "./LoginDetailOrderByInput";

export type LoginDetailFindManyArgs = {
  where?: LoginDetailWhereInput;
  orderBy?: Array<LoginDetailOrderByInput>;
  skip?: number;
  take?: number;
};

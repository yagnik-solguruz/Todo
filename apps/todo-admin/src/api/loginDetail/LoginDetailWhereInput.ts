import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LoginDetailWhereInput = {
  id?: StringFilter;
  ip?: StringNullableFilter;
  userId?: StringFilter;
};

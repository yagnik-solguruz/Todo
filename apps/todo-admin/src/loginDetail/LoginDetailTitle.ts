import { LoginDetail as TLoginDetail } from "../api/loginDetail/LoginDetail";

export const LOGINDETAIL_TITLE_FIELD = "ip";

export const LoginDetailTitle = (record: TLoginDetail): string => {
  return record.ip?.toString() || String(record.id);
};

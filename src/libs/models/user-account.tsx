import { PermissionType } from "./permission";

export interface UserAccount {
  accountName: string;
  permission: PermissionType;
  userName?: string;
  password?: string;
}

export interface UserAccountReq {
  userName: string;
  password: string;
  permission: PermissionType;
}

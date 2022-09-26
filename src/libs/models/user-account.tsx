import { PermissionType } from "./permission";

export interface UserAccount {
  userId: number;
  fullName: string;
  permission: PermissionType;
  key?: string;
}

export interface UserAccountReq {
  userName: string;
  password: string;
}

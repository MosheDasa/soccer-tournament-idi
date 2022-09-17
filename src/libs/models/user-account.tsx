import { PermissionType } from "./permission";

export interface UserAccount {
  username: string;
  password: string;
  permission?: PermissionType;
}

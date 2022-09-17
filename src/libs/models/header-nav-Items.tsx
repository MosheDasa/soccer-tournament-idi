import { PermissionType } from "./permission";

export interface navItem {
  path: string;
  title: string;
  permission: PermissionType;
}

export const navItems: Array<navItem> = [
  {
    path: "adminScreen",
    title: "מסך מנהל",
    permission: PermissionType.admin,
  },
  {
    path: "refereeScreen",
    title: "מסך שופט",
    permission: PermissionType.referee,
  },
  {
    path: "pointsTable",
    title: "טבלה תוצאות",
    permission: PermissionType.user,
  },
  { path: "login", title: "התחברות", permission: PermissionType.user },
  { path: "logout", title: "התנתק", permission: PermissionType.referee },
  {
    path: "teamroster",
    title: "פרסום סגלים",
    permission: PermissionType.user,
  },
  {
    path: "scoreboard",
    title: "לוח תוצאות",
    permission: PermissionType.user,
  },
];

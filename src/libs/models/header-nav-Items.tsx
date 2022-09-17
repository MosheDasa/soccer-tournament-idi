import { PermissionType } from "./permission";

export interface navItem {
  path: string;
  title: string;
  permission: Array<PermissionType>;
}

export const navItems: Array<navItem> = [
  {
    path: "adminScreen",
    title: "מסך מנהל",
    permission: [PermissionType.admin],
  },
  {
    path: "refereeScreen",
    title: "מסך שופט",
    permission: [PermissionType.referee, PermissionType.admin],
  },
  {
    path: "",
    title: "טבלה תוצאות",
    permission: [
      PermissionType.user,
      PermissionType.referee,
      PermissionType.admin,
    ],
  },
  {
    path: "teamroster",
    title: "פרסום סגלים",
    permission: [
      PermissionType.user,
      PermissionType.referee,
      PermissionType.admin,
    ],
  },
  {
    path: "scoreboard",
    title: "לוח תוצאות",
    permission: [
      PermissionType.user,
      PermissionType.referee,
      PermissionType.admin,
    ],
  },
  {
    path: "login",
    title: "התחברות",
    permission: [PermissionType.user],
  },
  {
    path: "logout",
    title: "התנתק",
    permission: [PermissionType.referee, PermissionType.admin],
  },
];

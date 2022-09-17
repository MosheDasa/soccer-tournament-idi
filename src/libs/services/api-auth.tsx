import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";
import { PermissionType } from "../models/permission";

export const useApiAuth = () => {
  const keyAuthLocalStorage = "AutUser";

  const [permissionUser, setPermissionUser] = useState<PermissionType>(
    PermissionType.user
  );

  const [value, setValue] = useLocalStorage(
    keyAuthLocalStorage,
    PermissionType.user
  );

  useEffect(() => {
    setPermissionUser(value);
    console.log("dasa", value);
  }, [""]);

  const login = (userName: string, password: string) => {
    setPermissionUser(PermissionType.admin);
    setValue(PermissionType.admin);
  };

  const logout = () => {
    setPermissionUser(PermissionType.user);
    setValue(PermissionType.user);
  };

  return {
    login,
    logout,
    permissionUser,
  };
};

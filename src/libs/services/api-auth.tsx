import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";
import { KeyLocalStorge } from "../models/keys";
import { PermissionType } from "../models/permission";

export const useApiAuth = () => {
  const [permissionUser, setPermissionUser] = useState<PermissionType>(
    PermissionType.user
  );

  const [value, setValue] = useLocalStorage(
    KeyLocalStorge.AutUserKeyStorage,
    PermissionType.user
  );

  useEffect(() => {
    setPermissionUser(value);
  }, []);

  const login = (userName: string, password: string) => {
    setPermissionUser(PermissionType.referee);
    setValue(PermissionType.referee);
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

import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";
import { KeyLocalStorge } from "../models/keys";
import { PermissionType } from "../models/permission";
import { UserAccount } from "../models/user-account";

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
    return fetch("/mock/users.json").then((res) => {
      res.json().then((data: any) => {
        const usersData = data.users as Array<UserAccount>;

        if (usersData && usersData.length) {
          const userLogin = usersData.find(
            (x) => x.username === userName && x.password === password
          );

          if (userLogin && userLogin.permission) {
            setPermissionUser(userLogin.permission);
            setValue(userLogin.permission);
            if (userLogin.permission === PermissionType.referee) {
              window.location.href = "/refereeScreen";
            } else {
              window.location.href = "/adminScreen";
            }
          }
        }
      });
    });
  };

  const isLogin = (permissionAllow: Array<PermissionType>) => {
    const isLogin = permissionAllow.find((x) => x === value) != null;
    return isLogin;
  };

  const logout = () => {
    setPermissionUser(PermissionType.user);
    setValue(PermissionType.user);
  };

  return {
    login,
    logout,
    permissionUser,
    isLogin,
  };
};

import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";
import { ErrorMessageType, ResponseData } from "../models/generta";
import { KeyLocalStorge } from "../models/keys";
import { PermissionType } from "../models/permission";
import { UserAccount, UserAccountReq } from "../models/user-account";

export const useApiAuth = () => {
  const DefaultUser: UserAccount = {
    fullName: "user",
    permission: PermissionType.user,
    userId: 0,
  };

  const [permissionUser, setPermissionUser] =
    useState<UserAccount>(DefaultUser);

  const [dataStorage, setDataStorage] = useLocalStorage(
    KeyLocalStorge.AutUserKeyStorage,
    DefaultUser
  );

  useEffect(() => {
    setPermissionUser(dataStorage);
  }, []);

  const login = (userAccountReq: UserAccountReq) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userAccountReq),
    };

    return fetch(process.env.REACT_APP_URL_API + "/AuthUser", requestOptions)
      .then((res) => {
        return res.json().then((response: ResponseData<UserAccount>) => {
          if (response && response.isSuccess) {
            const userLogin = response.data;

            if (userLogin && userLogin.permission) {
              setPermissionUser(userLogin);
              setDataStorage(userLogin);
              if (userLogin.permission === PermissionType.referee) {
                window.location.href = "/refereeScreen";
              } else {
                window.location.href = "/adminScreen";
              }
              return ErrorMessageType.None;
            } else {
              return ErrorMessageType.Invalid;
            }
          } else {
            return ErrorMessageType.GeneralError;
          }
        });
      })
      .catch((er) => {
        return ErrorMessageType.GeneralError;
      });
  };

  const isLogin = (permissionAllow: Array<PermissionType>) => {
    let isLogin = false;
    if (dataStorage) {
      isLogin =
        permissionAllow.find((x) => x === dataStorage.permission) != null;
    }
    return isLogin;
  };

  const logout = () => {
    setPermissionUser(DefaultUser);
    setDataStorage(DefaultUser);
    window.location.href = "/";
  };

  return {
    login,
    logout,
    permissionUser,
    isLogin,
  };
};

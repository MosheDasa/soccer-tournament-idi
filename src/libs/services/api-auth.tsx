import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";
import { ErrorMessageType, ResponseData } from "../models/generta";
import { KeyLocalStorge } from "../models/keys";
import { PermissionType } from "../models/permission";
import { UserAccount, UserAccountReq } from "../models/user-account";

export const useApiAuth = () => {
  const DefaultUser: UserAccount = {
    accountName: "user",
    permission: PermissionType.user,
    refereeId: 0,
  };

  const [permissionUser, setPermissionUser] =
    useState<UserAccount>(DefaultUser);

  const [dataStorage, setDataStorage] = useLocalStorage(
    KeyLocalStorge.AutUserKeyStorage,
    DefaultUser
  );

  useEffect(() => {
    setPermissionUser(dataStorage);
  }, [""]);

  const login = (userAccountReq: UserAccountReq) => {
    return fetch("/mock/users.json")
      .then((res) => {
        return res.json().then((response: ResponseData<Array<UserAccount>>) => {
          if (response && response.isSuccess && response.data.length) {
            const userLogin = response.data.find(
              //todo mdasa (x) => x.userName === userAccountReq.userName && x.password === userAccountReq.password
              (x) => true
            );

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

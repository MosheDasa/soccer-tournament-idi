import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";
import { ResponseData } from "../models/generta";
import { KeyLocalStorge } from "../models/keys";
import { PermissionType } from "../models/permission";
import { Player } from "../models/team";
import { UserAccount, UserAccountReq } from "../models/user-account";

export const useApiAdmin = () => {
  const getTablePlayers = () => {
    return fetch(process.env.REACT_APP_URL_API + "/admin")
      .then((res) => {
        return res.json().then((response: ResponseData<Array<Player>>) => {
          return response;
        });
      })
      .catch((er) => {
        const defaultReplay: ResponseData<Array<Player>> = {
          isSuccess: false,
          data: er,
          description: er,
          errorCode: 99,
        };
        return defaultReplay;
      });
  };

  return {
    getTablePlayers,
  };
};

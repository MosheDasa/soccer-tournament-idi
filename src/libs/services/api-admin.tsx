import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";
import { EventsData } from "../models/events-data";
import { Game } from "../models/game";
import { ResponseData } from "../models/generta";
import { KeyLocalStorge } from "../models/keys";
import { PermissionType } from "../models/permission";
import { Player, Team } from "../models/team";
import { UserAccount, UserAccountReq } from "../models/user-account";

export const useApiAdmin = () => {
  const getTablePlayers = () => {
    return fetch(process.env.REACT_APP_URL_API + "/admin/GetTablePlayers")
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

  const getTableUser = () => {
    return fetch(process.env.REACT_APP_URL_API + "/admin/GetTableUser")
      .then((res) => {
        return res.json().then((response: ResponseData<Array<UserAccount>>) => {
          return response;
        });
      })
      .catch((er) => {
        const defaultReplay: ResponseData<Array<UserAccount>> = {
          isSuccess: false,
          data: er,
          description: er,
          errorCode: 99,
        };
        return defaultReplay;
      });
  };

  const getTableEvents = () => {
    return fetch(process.env.REACT_APP_URL_API + "/admin/GetTableEvents")
      .then((res) => {
        return res.json().then((response: ResponseData<Array<EventsData>>) => {
          return response;
        });
      })
      .catch((er) => {
        const defaultReplay: ResponseData<Array<EventsData>> = {
          isSuccess: false,
          data: er,
          description: er,
          errorCode: 99,
        };
        return defaultReplay;
      });
  };

  const getTableGames = () => {
    return fetch(process.env.REACT_APP_URL_API + "/admin/GetTableGames")
      .then((res) => {
        return res.json().then((response: ResponseData<Array<Game>>) => {
          return response;
        });
      })
      .catch((er) => {
        const defaultReplay: ResponseData<Array<Game>> = {
          isSuccess: false,
          data: er,
          description: er,
          errorCode: 99,
        };
        return defaultReplay;
      });
  };

  const getTableTeams = () => {
    return fetch(process.env.REACT_APP_URL_API + "/admin/GetTableTeams")
      .then((res) => {
        return res.json().then((response: ResponseData<Array<Team>>) => {
          return response;
        });
      })
      .catch((er) => {
        const defaultReplay: ResponseData<Array<Team>> = {
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
    getTableUser,
    getTableEvents,
    getTableGames,
    getTableTeams,
  };
};

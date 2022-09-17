import { useState } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";
import { KeyLocalStorge } from "../models/keys";
import { Team } from "../models/team";

export const useApiInformation = () => {
  const [value, setValue] = useLocalStorage(KeyLocalStorge.TeamsKeyStorage, "");

  const loadTeams = async () => {
    fetch("/mock/team.json")
      .then((res) => res.json())
      .then((json) => {
        setValue(json.teams);
      });
  };

  const loadGame = async () => {
    fetch("/mock/game.json")
      .then((res) => res.json())
      .then((json) => {
        console.log("dasa loadGame", json);
      });
  };

  const getTeamById = (teamId: number) => {
    const teams = value as Array<Team>;
    const teamObj = teams.filter((x) => x.teamID === teamId);
    if (teamObj) {
      return teamObj[0];
    }
    return null;
  };

  const getTeams = () => {
    return value as Array<Team>;
  };

  return {
    loadTeams,
    loadGame,
    getTeams,
    getTeamById,
  };
};

import { useState } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";
import { KeyLocalStorge } from "../models/keys";

export const useApiInformation = () => {
  const [value, setValue] = useLocalStorage(KeyLocalStorge.TeamsKeyStorage, "");

  const loadTeams = async () => {
    fetch("/mock/team.json")
      .then((res) => res.json())
      .then((json) => {
        setValue(json);
      });
  };

  const loadGame = async () => {
    fetch("/mock/game.json")
      .then((res) => res.json())
      .then((json) => {
        console.log("dasa loadGame", json);
      });
  };

  const getTeams = () => {
    return value;
  };

  return {
    loadTeams,
    loadGame,
    getTeams,
  };
};

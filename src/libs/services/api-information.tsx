import { useState } from "react";

export const useApiInformation = () => {
  const [teams, setTeams] = useState([]);
  const [game, setGame] = useState([]);

  const loadTeams = async () => {
    fetch("/mock/team.json")
      .then((res) => res.json())
      .then((json) => {
        setTeams(json);
      });
  };

  const loadGame = async () => {
    fetch("/mock/game.json")
      .then((res) => res.json())
      .then((json) => {
        setGame(json);
      });
  };

  return {
    loadTeams,
    loadGame,
  };
};

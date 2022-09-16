import { useState } from "react";

export const useApiInformation = () => {
  const [teams, setTeams] = useState([]);
  const [game, setGame] = useState([]);

  const loadTeams = async () => {
    console.log("dasa loadTeams res 1");
    fetch("/mock/team.json")
      .then((res) => res.json())
      .then((json) => {
        console.log("dasa loadTeams res", json);
        setTeams(json);
      });
  };

  const loadGame = async () => {
    fetch("/mock/game.json")
      .then((res) => res.json())
      .then((json) => {
        console.log("dasa loadGame res", json);
        setGame(json);
      });
  };

  return {
    loadTeams,
    loadGame,
  };
};

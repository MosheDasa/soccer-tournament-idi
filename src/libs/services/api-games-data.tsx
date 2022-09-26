import { useLocalStorage } from "../hooks/use-local-storage";
import { Game, GameStatusType } from "../models/game";
import { ResponseData } from "../models/generta";
import { KeyLocalStorge } from "../models/keys";

export const useApiGamesData = () => {
  const [dataStorage, setDataStorage] = useLocalStorage(
    KeyLocalStorge.SelectRefereeGameKeyStorage,
    ""
  );

  // ---------------- Game ----------------------
  //todo
  const loadGameData = async () => {
    fetch("/mock/game.json")
      .then((res) => res.json())
      .then((response: ResponseData<any>) => {});
  };

  const loadListGames = async (userId: number) => {
    return fetch("/mock/getListGameByuserId-1.json")
      .then((res) => res.json())
      .then((response: ResponseData<Array<Game>>) => {
        return response;
      });
  };

  const getGameByGameId = async (gameId: number) => {
    return fetch("/mock/getGameByGameId.json")
      .then((res) => res.json())
      .then((response: ResponseData<Game>) => {
        return response;
      });
  };

  const UpdateStatusGame = async (
    gameId: number,
    gameStatus: GameStatusType
  ) => {
    return fetch("/mock/updateStatusGame.json")
      .then((res) => res.json())
      .then((response: ResponseData<string>) => {
        return response;
      });
  };

  const UpdatePointsGame = async (
    gameId: number,
    teamId: number,
    playerId: number
  ) => {
    return fetch("/mock/updatePointsGame.json")
      .then((res) => res.json())
      .then((response: ResponseData<string>) => {
        return response;
      });
  };

  return {
    loadGameData,
    loadListGames,
    setDataStorage,
    dataStorage,
    getGameByGameId,
    UpdateStatusGame,
    UpdatePointsGame,
  };
};

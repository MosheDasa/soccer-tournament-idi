import { useEffect, useState } from "react";
import { Game, GameStatusType } from "../../../libs/models/game";
import { PermissionType } from "../../../libs/models/permission";
import { useApiAuth } from "../../../libs/services/api-auth";
import { useApiGamesData } from "../../../libs/services/api-games-data";
import SelectGame from "./components/selected-game";
import UpdateGamePointComp from "./components/update-game-point";
import UpdateStatusGameComp from "./components/update-status-game";

export enum ViewRefereeScreen {
  SelectGame,
  UpdateGame,
  EndGame,
}

function RefereeScreen() {
  const { setDataStorage, dataStorage, UpdateStatusGame, getGameByGameId } =
    useApiGamesData();
  const { permissionUser, logout, isLogin } = useApiAuth();
  const [view, setView] = useState<ViewRefereeScreen>();

  useEffect(() => {
    onloadRefereeScreen();
  }, []);

  const onloadRefereeScreen = () => {
    const login = isLogin([PermissionType.admin, PermissionType.referee]);
    if (!login) {
      logout();
    } else {
      const gameData = dataStorage as Game;
      if (gameData) {
        if (gameData.gameStatus === GameStatusType.Ended) {
          setView(ViewRefereeScreen.EndGame);
        } else {
          setView(ViewRefereeScreen.UpdateGame);
        }
      } else {
        setView(ViewRefereeScreen.SelectGame);
      }
    }
  };

  const saveSelectedGame = (selectedGame: Game) => {
    if (selectedGame) {
      setDataStorage(selectedGame);
    } else {
      //todo
    }
  };

  const saveStatueGame = async (gameStatus: GameStatusType) => {
    if (gameStatus) {
      const gameData = dataStorage as Game;
      if (gameData && gameData.gameId) {
        const response = await UpdateStatusGame(gameData.gameId, gameStatus);
        if (response && response.isSuccess) {
          const responseGame = await getGameByGameId(gameData.gameId);
          if (responseGame && responseGame.isSuccess && responseGame.data) {
            saveSelectedGame(responseGame.data);
            setView(ViewRefereeScreen.UpdateGame);
          } else {
            //todo: error messagae
          }
        } else {
          //todo: error messagae
        }
      }
    } else {
      //todo
    }
  };

  return (
    <>
      <h1>היי, {permissionUser.accountName}</h1>

      {view === ViewRefereeScreen.SelectGame && (
        <SelectGame
          saveSelectedGame={saveSelectedGame}
          refereeId={permissionUser.refereeId}
        ></SelectGame>
      )}
      {view === ViewRefereeScreen.UpdateGame && (
        <>
          <UpdateStatusGameComp
            gameStatus={dataStorage.gameStatus}
            saveStatueGame={saveStatueGame}
          ></UpdateStatusGameComp>
          <UpdateGamePointComp></UpdateGamePointComp>
        </>
      )}

      {view === ViewRefereeScreen.EndGame && <h1> המשחק הסתיים </h1>}
    </>
  );
}

export default RefereeScreen;

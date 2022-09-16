import { GameStatusType } from "../../../libs/models/game";
import GameResult from "./components/game-result";

function Scoreboard() {
  return (
    <>
      <h1>בית א</h1>
      <GameResult
        gameStatus={GameStatusType.notStarted}
        pointsTeamA={2}
        pointsTeamB={0}
        teamAId={1}
        teamBId={2}
      ></GameResult>

      <GameResult
        gameStatus={GameStatusType.notStarted}
        pointsTeamA={4}
        pointsTeamB={1}
        teamAId={4}
        teamBId={3}
      ></GameResult>

      <h1>בית ב</h1>
      <GameResult
        gameStatus={GameStatusType.notStarted}
        pointsTeamA={2}
        pointsTeamB={0}
        teamAId={1}
        teamBId={2}
      ></GameResult>

      <GameResult
        gameStatus={GameStatusType.notStarted}
        pointsTeamA={4}
        pointsTeamB={1}
        teamAId={4}
        teamBId={3}
      ></GameResult>
    </>
  );
}

export default Scoreboard;

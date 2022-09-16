import { Game } from "../../../../libs/models/game";

function GameResult(prop: Game) {
  return (
    <div>
      <span>{prop.teamAId}</span>
      <span>
        {prop.pointsTeamA} - {prop.pointsTeamB}
      </span>
      <span>{prop.teamBId}</span>
    </div>
  );
}
export default GameResult;

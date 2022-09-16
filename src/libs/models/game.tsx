export interface Game {
  teamAId: number;
  pointsTeamA: number;
  teamBId: number;
  pointsTeamB: number;
  gameStatus: GameStatusType;
}

export enum GameStatusType {
  notStarted,
  Started,
  Ended,
}

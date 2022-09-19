export interface Game {
  gameId: number;
  teamA: TeamGameData;
  teamB: TeamGameData;
  refereeId: number;
  gameStatus: GameStatusType;
  gameType: GameType;
}

export interface TeamGameData {
  teamId: number;
  teamName: string;
  points: number;
}

export enum GameStatusType {
  notStarted,
  Started,
  Ended,
}

export enum GameType {
  BatYam,
  Semifinals,
  final,
}

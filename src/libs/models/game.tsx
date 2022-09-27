export interface Game {
  gameId: number;
  teamAId: number;
  teamAName: number;
  teamAGol: number;
  teamBId: number;
  teamBName: number;
  teamBGol: number;
  userId: number;
  gameStatus: GameStatusType;
  gameType: GameType;
  insrtDate: string;
  updateDate: string;
}

export enum GameStatusType {
  None,
  Started,
  Ended,
}

export enum GameType {
  BatYam,
  Semifinals,
  final,
}

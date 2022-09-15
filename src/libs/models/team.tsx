export interface Team {
  teamID: number;
  teamName: number;
  teamCoach: string;
  players: Array<Player>;
  batyam: number;
}

export interface Player {
  playerNumber: number;
  fullName: string;
  teamID: number;
}

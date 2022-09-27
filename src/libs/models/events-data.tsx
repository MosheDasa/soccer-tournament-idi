export interface EventsData {
  userId: number;
  eventId: number;
  typeEvent: TypeEvent;
  playerId: number;
  gameId: number;
  updateDate: string;
  insrtDate: string;
}

export enum TypeEvent {
  none,
  gole,
  yellowCard,
  redCard,
}

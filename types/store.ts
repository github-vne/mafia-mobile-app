import { TPlayer } from './player';

export type TStore = {
  players: TPlayer[];
  playersVote: TPlayer['id'][];
  isShowRoles: boolean;
  isVoteMode: boolean;
};

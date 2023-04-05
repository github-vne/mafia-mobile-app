export enum ERole {
  Peaceful = 'peaceful',
  Sheriff = 'sheriff',
  Mafia = 'mafia',
  Don = 'don'
}

export type TPlayer = {
  id: string;
  order: number;
  name: string;
  role: ERole;
  fall: number;
  voteCount: number;
  isVote?: boolean;
  isDeleted?: boolean;
};

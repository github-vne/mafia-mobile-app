import { ERole } from '../types/player';

export const AVAILABLE_ROLES = [
  ERole.Don,
  ERole.Mafia,
  ERole.Mafia,
  ERole.Sheriff,
  ERole.Peaceful,
  ERole.Peaceful,
  ERole.Peaceful,
  ERole.Peaceful,
  ERole.Peaceful,
  ERole.Peaceful
];

export const TITLE_ROLE: Record<ERole, string> = {
  [ERole.Don]: 'Дон мафии',
  [ERole.Sheriff]: 'Шериф',
  [ERole.Peaceful]: 'Мирный',
  [ERole.Mafia]: 'Мафия'
};

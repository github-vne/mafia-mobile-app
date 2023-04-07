import { ERole } from '../types/player';

export const getRoleIcon = (role: ERole) => {
  switch (role) {
    case ERole.Don:
      return 'user-secret';
    case ERole.Sheriff:
      return 'star';
    case ERole.Mafia:
      return 'thumbs-down';
    default:
      return 'thumbs-up';
  }
};

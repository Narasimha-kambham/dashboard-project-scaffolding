import type { UserRole } from '../types/auth';

export const ROLES: Record<string, UserRole> = {
  RECRUITER: 'Recruiter',
  CAPTAIN: 'Captain',
  ADMIN: 'Admin',
} as const;

export const ALL_ROLES: UserRole[] = Object.values(ROLES);

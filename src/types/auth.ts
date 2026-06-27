export type UserRole = 'Recruiter' | 'Captain' | 'Admin';

export interface User {
  id: string;
  name: string;
  role: UserRole;
}

export interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

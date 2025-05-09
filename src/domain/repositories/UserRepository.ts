import { type User } from '../models/User';

export interface UserRepository {
  getUsers: () => Promise<User[]>;
  getUserById: (id: number) => Promise<User>;
}
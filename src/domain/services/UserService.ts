import { type UserRepository } from '../repositories/UserRepository';

export const userService = (repository: UserRepository): UserRepository => ({
  getUsers: () => {
    return repository.getUsers();
  },
  getUserById: (id) => {
    return repository.getUserById(id);
  },
});

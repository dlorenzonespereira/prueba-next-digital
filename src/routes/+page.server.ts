import type { PageServerLoad } from './$types';
import { type User } from '$domain/models/User';
import { userService } from '$domain/services/UserService';
import { userRepository } from '$infrastructure/repositories/userRepository';
import { httpAxios } from '$infrastructure/instances/httpAxios';

export const load: PageServerLoad = async () => {
  const repository = userRepository(httpAxios);
  const users: User[] = await userService(repository).getUsers();

  return {
    users,
  };
};
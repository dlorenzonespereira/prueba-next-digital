import type { PageServerLoad } from './$types';
import { type User } from '$domain/models/User';
import { userService } from '$domain/services/UserService';
import { userRepository } from '$infrastructure/repositories/userRepository';
import { httpAxios } from '$infrastructure/instances/httpAxios';

export const load: PageServerLoad = async ({ params }) => {
  const repository = userRepository(httpAxios);
  let user: User | null = null;
  try {
    user = await userService(repository).getUserById(parseInt(params?.id) || 0);
  } catch (error) {
    console.error('Error fetching user:', error);
  }

  return {
    user,
  };
};

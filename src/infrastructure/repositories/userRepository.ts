import { type User } from '$domain/models/User';
import { type UserRepository } from '$domain/repositories/UserRepository';
import { type Http } from '$domain/repositories/Http';
import { type UserDTO } from '$infrastructure/dto/UserDTO';

export const userRepository = (client: Http): UserRepository => ({
  getUsers: async () => {
    const apiUsers: UserDTO[] = await client.get<UserDTO[]>('users');

    return apiUsers.map(
      (userDto: UserDTO): User => ({
        id: userDto.id,
        name: userDto.name,
        username: userDto.username,
        email: userDto.email,
        address: userDto.address,
        phone: userDto.phone,
        website: userDto.website,
        company: userDto.company,
      }),
    );
  },

  getUserById: async (id) => {
    const apiUser = await client.get<UserDTO>(`users/${id}`);

    const user: User = {
      id: apiUser.id,
      name: apiUser.name,
      username: apiUser.username,
      email: apiUser.email,
      address: apiUser.address,
      phone: apiUser.phone,
      website: apiUser.website,
      company: apiUser.company,
    };

    return user;
  },
});

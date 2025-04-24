import { describe, it, expect, vi } from 'vitest';
import { userRepository } from './userRepository';
import { mockHttpClient } from '$tests/mocks/mockHttpClient';
import { createMockUser } from '$tests/mocks/mockUser';

describe('userRepository', () => {
  const repository = userRepository(mockHttpClient);

  it('should fetch and map users correctly', async () => {
    const mockUsers = [createMockUser()];

    (mockHttpClient.get as any).mockResolvedValue(mockUsers);

    const users = await repository.getUsers();

    expect(users).toEqual(mockUsers);
  });

  it('should fetch and map a user by ID correctly', async () => {
    const mockId = 17;
    const mockUser = createMockUser(mockId);

    (mockHttpClient.get as any).mockResolvedValue(mockUser);

    const user = await repository.getUserById(mockId);

    expect(user).toEqual(createMockUser(mockId));
  });
});

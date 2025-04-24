import { describe, it, expect, vi } from 'vitest';
import { type UserRepository } from './UserRepository';
import { createMockUser } from '$tests/mocks/mockUser';

const mockUserRepository: UserRepository = {
  getUsers: vi.fn(async () => [createMockUser()]),
  getUserById: vi.fn(async (id: number) => createMockUser(id)),
};

describe('UserRepository', () => {
  it('should fetch all users', async () => {
    const users = await mockUserRepository.getUsers();
    expect(users).toEqual([{ id: 1, name: 'Leanne Graham' }]);
    expect(mockUserRepository.getUsers).toHaveBeenCalledOnce();
  });

  it('should fetch a user by ID', async () => {
    const user = await mockUserRepository.getUserById(2);
    expect(user).toEqual({ id: 2, name: 'Leanne Graham' });
    expect(mockUserRepository.getUserById).toHaveBeenCalledWith(2);
  });
});

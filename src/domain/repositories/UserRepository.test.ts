import { describe, it, expect, vi } from 'vitest';
import { type UserRepository } from './UserRepository';
import type { User } from '$domain/models/User';

const MOCK_USER: User = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

const mockUserRepository: UserRepository = {
  getUsers: vi.fn(async () => [MOCK_USER]),
  getUserById: vi.fn(async (id: string) => MOCK_USER),
};

describe('UserRepository', () => {
  it('should fetch all users', async () => {
    const users = await mockUserRepository.getUsers();
    expect(users).toEqual([{ id: '1', name: 'Leanne Graham' }]);
    expect(mockUserRepository.getUsers).toHaveBeenCalledOnce();
  });

  it('should fetch a user by ID', async () => {
    const user = await mockUserRepository.getUserById('1');
    expect(user).toEqual({ id: '1', name: 'Leanne Graham' });
    expect(mockUserRepository.getUserById).toHaveBeenCalledWith('1');
  });
});

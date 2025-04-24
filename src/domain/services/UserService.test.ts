import { describe, it, expect, vi } from 'vitest';
import { userService } from '../services/UserService';
import { mockRepository } from '$tests/mocks/mockUserRespository';

describe('UserService', () => {
  const service = userService(mockRepository);

  it('should fetch all users', () => {
    const users = service.getUsers();
    expect(mockRepository.getUsers).toHaveBeenCalled();
    expect(users).toEqual([{ id: 1, name: 'John Doe' }]);
  });

  it('should fetch a user by ID', () => {
    const user = service.getUserById(1);
    expect(mockRepository.getUserById).toHaveBeenCalledWith(1);
    expect(user).toEqual({ id: 1, name: 'John Doe' });
  });
});
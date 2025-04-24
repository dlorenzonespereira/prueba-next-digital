import { vi } from 'vitest';
import { createMockUser } from './mockUser';
import { type UserRepository } from '$domain/repositories/UserRepository';

export const mockRepository: UserRepository = {
  getUsers: vi.fn(() => Promise.resolve([createMockUser()])),
  getUserById: vi.fn((id) => Promise.resolve(createMockUser(id))),
};

import { vi } from 'vitest';
import { type Http } from '$domain/repositories/Http';

export const mockHttpClient: Http = {
  get: vi.fn(),
  put: vi.fn(),
  post: vi.fn(),
  delete: vi.fn(),
};

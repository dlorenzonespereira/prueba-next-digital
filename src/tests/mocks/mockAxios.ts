import { vi } from 'vitest';

interface MockAxiosResponse {
  route?: string;
  data?: any;
}

const mockAxiosInstance = {
  interceptors: {
    request: { use: vi.fn(), eject: vi.fn() },
    response: { use: vi.fn(), eject: vi.fn() },
  },
  get: vi.fn((route): Promise<MockAxiosResponse> => Promise.resolve({ route: route, data: [] })),
  post: vi.fn((route, data): Promise<MockAxiosResponse> => Promise.resolve({ route: route, data: data })),
  put: vi.fn((route, data): Promise<MockAxiosResponse> => Promise.resolve({ route: route, data: data })),
  delete: vi.fn((route): Promise<MockAxiosResponse> => Promise.resolve({ route: route, data: [] })),
};

const mockAxios = {
  create: vi.fn(() => mockAxiosInstance),
  ...mockAxiosInstance,
};

export default mockAxios;

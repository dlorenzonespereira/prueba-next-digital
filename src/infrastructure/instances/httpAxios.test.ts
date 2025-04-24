import { describe, it, expect, vi } from 'vitest';
import { httpAxios } from './httpAxios';
import axios from 'axios';
import mockAxios from '$tests/mocks/mockAxios';

vi.mock('axios', () => mockAxios);

const mockedAxios = axios as unknown as typeof mockAxios;

describe('httpAxios', () => {
  it('should perform a GET request', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { success: true } });

    const response = await httpAxios.get('/test');

    expect(mockedAxios.get).toHaveBeenCalledWith('/test', { params: undefined });
    expect(response).toEqual({ success: true });
  });

  it('should perform a POST request', async () => {
    mockedAxios.post.mockResolvedValueOnce({ data: { success: true } });

    const response = await httpAxios.post('/test', { key: 'value' });

    expect(mockedAxios.post).toHaveBeenCalledWith('/test', { key: 'value' }, {});
    expect(response).toEqual({ success: true });
  });

  it('should perform a PUT request', async () => {
    mockedAxios.put.mockResolvedValueOnce({ data: { success: true } });

    const response = await httpAxios.put('/test', { key: 'value' });

    expect(mockedAxios.put).toHaveBeenCalledWith('/test', { key: 'value' }, {});
    expect(response).toEqual({ success: true });
  });

  it('should perform a DELETE request', async () => {
    mockedAxios.delete.mockResolvedValueOnce({ data: { success: true } });

    const response = await httpAxios.delete('/test');

    expect(mockedAxios.delete).toHaveBeenCalledWith('/test', { params: undefined });
    expect(response).toEqual({ success: true });
  });
});
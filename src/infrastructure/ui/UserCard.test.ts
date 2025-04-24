import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import UserCard from './UserCard.svelte';

describe('UserCard.svelte', () => {
  it('should correctly render user data', () => {
    const user = {
      id: 1,
      name: 'Juan Pérez',
      username: 'juanperez',
      email: 'juan.perez@example.com',
      company: {
        name: 'Example Company',
        catchPhrase: 'Innovation and quality',
      },
    };

    const { getByText, getByRole } = render(UserCard, { props: { user } });

    expect(getByText('Juan Pérez')).not.toBeNull();
    expect(getByText('@juanperez')).not.toBeNull();
    expect(getByText('juan.perez@example.com')).not.toBeNull();
    expect(getByText('Example Company')).not.toBeNull();
    expect(getByText('Innovation and quality')).not.toBeNull();
    const link = getByRole('link', { name: 'View details' });
    expect(link).not.toBeNull();
    expect(link.getAttribute('href')).toBe('/user/1');
  });
});
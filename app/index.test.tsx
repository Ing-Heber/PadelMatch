import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';

import Index from './index';

describe('Index screen', () => {
  it('renders the starter content', () => {
    render(<Index />);

    expect(screen.getByText('PadelMatch')).toBeTruthy();
    expect(
      screen.getByText('UI foundations are ready for upcoming component and skeleton work.')
    ).toBeTruthy();
  });
});


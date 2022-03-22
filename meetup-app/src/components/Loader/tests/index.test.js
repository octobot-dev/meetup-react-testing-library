import { render, screen } from '@testing-library/react';
import React from 'react';

import Loader from '../index';

describe('Loader', () => {
  it('Should be accesible', () => {
    render(<Loader />);

    expect(screen.getByRole('progressbar', { name: 'Loading...' })).not.toBeNull();
  });
});

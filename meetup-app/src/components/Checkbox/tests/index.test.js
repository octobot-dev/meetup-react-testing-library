import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import 'jest-styled-components';

import Checkbox from '../index';

describe('Checkbox', () => {
  it('renders correctly when unchecked', () => {
    const mockOnChange = jest.fn();
    const { container } = render(<Checkbox checked={false} onChange={mockOnChange} label="My checkbox" />);
    // Snpshot test for component
    expect(container).toMatchSnapshot();

    const checkbox = screen.getByRole('checkbox', { name: 'My checkbox' }); // Will fail if checkbox role is not present
    expect(checkbox).not.toBeChecked();
  });

  it('renders correctly when checked', () => {
    const mockOnChange = jest.fn();
    const { container } = render(<Checkbox checked onChange={mockOnChange} label="My checkbox" />);
    // Snpshot test for component
    expect(container).toMatchSnapshot();

    const checkbox = screen.getByRole('checkbox', { name: 'My checkbox' }); // Will fail if checkbox role is not present
    expect(checkbox).toBeChecked();
  });

  it('calls onChange callback when changed', () => {
    const mockOnChange = jest.fn();
    render(<Checkbox checked={false} onChange={mockOnChange} label="My checkbox" />);

    const checkbox = screen.getByRole('checkbox', { name: 'My checkbox' });
    expect(checkbox).not.toBeChecked();
    userEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalled();
  });
});

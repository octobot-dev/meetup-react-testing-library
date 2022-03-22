import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToDoCard from '../index';

describe('ToDo Card', () => {
  it('should render information correctly', () => {
    render(<ToDoCard id={1} title="My item" description="The to do description." checked />);

    const card = screen.getByRole('listitem', { name: 'My item' });
    const checkbox = within(card).getByRole('checkbox');
    within(card).getByText('The to do description.');
    expect(checkbox).toBeChecked();
  });

  it('should change checkbox when clicked', async () => {
    render(<ToDoCard id={1} title="My item" description="The to do description." checked={false} />);

    const card = screen.getByRole('listitem', { name: 'My item' });
    const checkbox = within(card).getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    // Checkbox should be checked after click
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    // Checkbox should not be checked after click
    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});

import React from 'react';
import {
  render, screen, waitFor, within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import axiosInstance from '../../../resources/axios';

import Home from '../index';

jest.mock('../../../resources/axios', () => ({
  get: jest.fn(),
}));

const mockToDos = [
  {
    id: 1,
    title: 'Charla de Accesibilidad HTML',
    description: 'Aprenderemos cómo personas ciegas navegan un sitio web y veremos buenas prácticas al escribir código. ',
    checked: true,
  },
  {
    id: 2,
    title: 'Break',
    description: 'Tiempo libre entre charlas. Hay snacks!',
    checked: false,
  },
];

describe('Home', () => {
  it('Should fetch ToDos from backend', async () => {
    axiosInstance.get.mockReturnValue({
      data: mockToDos,
    });

    render(<Home />);

    // Check that loading spinner is accesible
    screen.getByRole('progressbar', { name: 'Loading...' });

    // Wait for API to be called
    await waitFor(() => expect(axiosInstance.get).toHaveBeenCalledWith('/items/'));

    const card1 = screen.getByRole('listitem', { name: 'Charla de Accesibilidad HTML' });
    expect(within(card1).getByRole('checkbox')).toBeChecked();

    const card2 = screen.getByRole('listitem', { name: 'Break' });
    expect(within(card2).getByRole('checkbox')).not.toBeChecked();
  });

  it('Should show error message when fetch fails', async () => {
    axiosInstance.get.mockReturnValue(Promise.reject(Error('Some error')));

    render(<Home />);

    // Wait for API to be called
    await waitFor(() => expect(axiosInstance.get).toHaveBeenCalledWith('/items/'));

    // Test for error message with alert role
    const errorMessage = screen.getByRole('alert');
    within(errorMessage).getByText('An error occurred when fetching data. Please try again later.');
  });

  it('Should filter ToDos when user writes in input', async () => {
    axiosInstance.get.mockReturnValue({
      data: mockToDos,
    });

    render(<Home />);

    // Wait for API to be called
    await waitFor(() => expect(axiosInstance.get).toHaveBeenCalledWith('/items/'));

    // Write in input
    const input = screen.getByRole('textbox', { name: 'Search' });
    userEvent.type(input, 'charla');

    // Only one item should be shown
    screen.getByRole('listitem', { name: 'Charla de Accesibilidad HTML' });
    expect(screen.queryByRole('listitem', { name: 'Break' })).toBeNull(); // use queryBy* when expecting null values
  });
});

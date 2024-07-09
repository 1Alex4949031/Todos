import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import App from '../App';

test('Adds and displays a new note test', () => {
    render(<App/>);

    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, {target: {value: 'New Note'}});

    fireEvent.submit(screen.getByTestId('note-input-form'));

    expect(screen.getByText('New Note')).toBeInTheDocument();
});

test('Toggles note test', () => {
    render(<App/>);

    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, {target: {value: 'New Note'}});

    fireEvent.submit(screen.getByTestId('note-input-form'));

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(screen.getByText('New Note')).toHaveClass('completed');
});

test('Deletes a note test', () => {
    render(<App/>);

    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, {target: {value: 'New Note'}});

    fireEvent.submit(screen.getByTestId('note-input-form'));

    const deleteButton = screen.getByText('✕');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('New Note')).not.toBeInTheDocument();
});
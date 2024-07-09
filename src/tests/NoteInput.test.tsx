import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import NoteInput from '../components/NoteInput/NoteInput';

test('Renders input and adds one note on submit', () => {
    const addNote = jest.fn();
    render(<NoteInput addNote={addNote} />);

    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'Test Note' } });

    const form = screen.getByTestId('note-input-form');
    fireEvent.submit(form);

    expect(addNote).toHaveBeenCalledWith('Test Note');
});

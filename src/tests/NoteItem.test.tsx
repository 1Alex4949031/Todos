import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import NoteItem from '../components/NoteItem/NoteItem';

test('Toggles note completed state', () => {
    const toggleNote = jest.fn();
    const deleteNote = jest.fn();
    const note = {id: 1, title: 'Test Note', completed: false};

    render(<NoteItem note={note} toggleNote={toggleNote} deleteNote={deleteNote}/>);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(toggleNote).toHaveBeenCalledWith(note.id);
});

test('Deletes note', () => {
    const toggleNote = jest.fn();
    const deleteNote = jest.fn();
    const note = {id: 1, title: 'Test Note', completed: false};

    render(<NoteItem note={note} toggleNote={toggleNote} deleteNote={deleteNote}/>);

    const deleteButton = screen.getByText('✕');
    fireEvent.click(deleteButton);

    expect(deleteNote).toHaveBeenCalledWith(note.id);
});

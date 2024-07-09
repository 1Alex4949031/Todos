import React from 'react';
import {render, screen} from '@testing-library/react';
import NoteList from '../components/NoteList/NoteList';

test('Renders notes', () => {
    const notes = [
        {id: 1, title: 'Note 1', completed: false},
        {id: 2, title: 'Note 2', completed: true}
    ];
    const toggleNote = jest.fn();
    const deleteNote = jest.fn();

    render(<NoteList notes={notes} toggleNote={toggleNote} deleteNote={deleteNote}/>);

    expect(screen.getByText('Note 1')).toBeInTheDocument();
    expect(screen.getByText('Note 2')).toBeInTheDocument();
});

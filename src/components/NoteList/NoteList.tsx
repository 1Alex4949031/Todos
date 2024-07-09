import React from 'react';
import NoteItem from "../NoteItem/NoteItem";
import "./NoteList.css";

interface NoteListProps {
    notes: { id: number, title: string, completed: boolean }[];
    toggleNote: (id: number) => void;
    deleteNote: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({notes, toggleNote, deleteNote}) => {
    return (
        <div className="note-list">
            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    note={note}
                    toggleNote={toggleNote}
                    deleteNote={deleteNote}
                />
            ))}
        </div>
    );
};

export default NoteList;
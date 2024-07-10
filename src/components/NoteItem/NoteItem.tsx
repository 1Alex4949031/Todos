import React from 'react';
import './NoteItem.css';

interface NoteItemProps {
    note: { id: number, title: string, completed: boolean };
    toggleNote: (id: number) => void;
    deleteNote: (id: number) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, toggleNote, deleteNote }) => {
    return (
        <div className="note-item" id={`note-${note.id}`}>
            <input
                type="checkbox"
                checked={note.completed}
                onChange={() => toggleNote(note.id)}
            />
            <span className={`note-title ${note.completed ? 'completed' : ''}`}>
                {note.title}
            </span>
            <button onClick={() => deleteNote(note.id)}>✕</button>
        </div>
    );
};

export default NoteItem;

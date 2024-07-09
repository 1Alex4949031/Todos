import React, {useState} from 'react';
import './NoteInput.css';

interface NoteInputProps {
    addNote: (title: string) => void;
}

const NoteInput: React.FC<NoteInputProps> = ({addNote}) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            addNote(title);
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="note-input-form" data-testid="note-input-form">
            <div className="input-container">
                <div className="arrow-icon"></div>
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="note-input"
                />
            </div>
        </form>
    );
};

export default NoteInput;

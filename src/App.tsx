import React, {useState, useMemo} from 'react';
import './App.css';
import NoteInput from "./components/NoteInput/NoteInput";
import NoteList from "./components/NoteList/NoteList";

interface Note {
    id: number;
    title: string;
    completed: boolean;

}

const App: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

    const addNote = (title: string) => {
        const newNote: Note = {id: Date.now(), title: title, completed: false}
        setNotes([...notes, newNote]);
    }

    const toggleNote = (id: number) => {
        setNotes(
            notes.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    };

    const deleteNote = (id: number) => {
        setNotes(notes.filter((note) => note.id !== id))
    }

    const clearCompleted = () => {
        setNotes(notes.filter((note) => !note.completed));
    };

    const filteredNotes = useMemo(() => {
        return notes.filter((note) => {
            if (filter === 'active') return !note.completed;
            if (filter === 'completed') return note.completed;
            return true;
        });
    }, [notes, filter]);

    const itemsLeft = notes.filter((note) => !note.completed).length;


    return (
        <div className="App">
            <h1>todos</h1>
            <div className="box-shadow">
                <NoteInput addNote={addNote}></NoteInput>
                {filteredNotes.length === 0 ? (
                    <div className="empty-message">No notes available</div>
                ) : (
                    <NoteList notes={filteredNotes} toggleNote={toggleNote} deleteNote={deleteNote}></NoteList>
                )}
                <footer>
                    <span>{itemsLeft} item{itemsLeft !== 1 ? 's' : ''} left</span>
                    <div className="filters">
                        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'selected' : ''}>All
                        </button>
                        <button onClick={() => setFilter('active')}
                                className={filter === 'active' ? 'selected' : ''}>Active
                        </button>
                        <button onClick={() => setFilter('completed')}
                                className={filter === 'completed' ? 'selected' : ''}>Completed
                        </button>
                    </div>
                    <button onClick={clearCompleted}>Clear completed</button>
                </footer>
            </div>
            <div className="footer-card-1"></div>
            <div className="footer-card-2"></div>
        </div>
    );
}

export default App;

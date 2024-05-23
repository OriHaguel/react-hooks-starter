const { Link } = ReactRouterDOM

import { NotePreview } from '../../note/cmps/note-preview.jsx'

export function NotesList({ notes, onRemove }) {
    console.log(notes);

    return (<section className="notes-list">
        <ul>
            {notes.map(note =>
                <li key={note.id}>
                    <NotePreview note={note} />
                    <button onClick={() => onRemove(note.id)}>x</button>

                </li>)
            }
        </ul>
    </section>
    )
}
//   <Link to={`/car/${car.id}`}><button>Details</button></Link>
// <Link to={`/car/edit/${note.id}`}><button>Edit</button></Link>
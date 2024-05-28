const { Link } = ReactRouterDOM
const { useState, useEffect } = React

import { NotePreview } from './note-preview.jsx'
import { MenuEditor } from './noteeditmenue.jsx';

export function NotesList({ notes, onRemove, onEditNote, togglePinned }) {
    const [isShowMenu, setisShowMenu] = useState(false)
    function onToggleShowMenu() {

        setisShowMenu((prevIsReviewModal) => !prevIsReviewModal)
    }

    console.log(notes);

    return (<section className="notes-list">
        <ul className="notes-container">
            {notes.map(note =>

                < Link key={note.id} to={`/note/${note.id}`}>
                    <li key={note.id} >

                        <NotePreview note={note} onRemove={onRemove} onEditNote={onEditNote} togglePinned={togglePinned} />




                    </li>

                </Link>)
            }
        </ul>
    </section >
    )
}

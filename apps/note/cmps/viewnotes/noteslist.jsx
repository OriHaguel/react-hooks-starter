const { Link } = ReactRouterDOM
const { useState, useEffect } = React

import { NotePreview } from './note-preview.jsx'
import { MenuEditor } from './noteeditmenue.jsx';

export function NotesList({ notes, onRemove, onEditNote }) {
    const [isShowMenu, setisShowMenu] = useState(false)
    function onToggleShowMenu() {

        setisShowMenu((prevIsReviewModal) => !prevIsReviewModal)
    }

    console.log(notes);

    return (<section className="notes-list">
        <ul className="notes-container">
            {notes.map(note =>

                < Link key={note.id} to={`/note/${note.id}`}>
                    <li className="note-preview" key={note.id} >

                        <NotePreview note={note} onRemove={onRemove} onEditNote={onEditNote} />




                    </li>

                </Link>)
            }
        </ul>
    </section >
    )
}
const { Link } = ReactRouterDOM
const { useState, useEffect } = React

import { NotePreview } from './note-preview.jsx'
import { MenuEditor } from './noteeditmenue.jsx';

export function NotesList({ moveToTrashToggle, isShowReviewModalColor, onToggleReviewModalColor,
    notes, onRemove, onEditNote, togglePinned, onSaveRender, saveAsEmail }) {
    const [isShowMenu, setisShowMenu] = useState(false)
    console.log(moveToTrashToggle)
    function onToggleShowMenu() {

        setisShowMenu((prevIsReviewModal) => !prevIsReviewModal)
    }

    console.log(notes);
    function handleChangeTodosCheck(ev, note, lineId) {
        console.log(note);
        ev.stopPropagation()
        console.log(ev.target.checked)
        const { type, name: prop } = ev.target

        let { value } = ev.target
        console.log(type, prop, value);
        //  value = value
        //  console.log(note);
        var newList = note.lists.find((list) => list.id === lineId)
        newList.isCheked = ev.target.checked
        // console.log(newList);
        var newLists = note.lists
        console.log(onSaveRender)
        onSaveRender(ev, note)
        setNote(prevNote => ({ ...prevNote, lists: newLists }))

    }

    return (<section className="notes-list">
        <ul className="notes-container">
            {notes.map(note =>

                < Link key={note.id} to={`/note/${note.id}`}>
                    <li key={note.id} >

                        <NotePreview moveToTrashToggle={moveToTrashToggle} handleChangeTodosCheck={handleChangeTodosCheck} saveAsEmail={saveAsEmail} isShowReviewModalColor={isShowReviewModalColor} onToggleReviewModalColor={onToggleReviewModalColor} onSave={onSaveRender} note={note} onRemove={onRemove} onEditNote={onEditNote} togglePinned={togglePinned} />




                    </li>

                </Link>)
            }
        </ul>
    </section >
    )
}

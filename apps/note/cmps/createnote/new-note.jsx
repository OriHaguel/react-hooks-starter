const { useState, useEffect } = React
import { NewNoteEdit } from "./new-note-edit.jsx"
export function NewNote({ toggle }) {

    const [isOpen, setIsOpen] = useState(false)
    function onOpen() {
        setIsOpen(true)
    }
    function onClose() {
        setIsOpen(false)
    }
    function onToggle() {
        toggle()
    }
    return <section className="new-note-section" onClick={onToggle}>

        <div className="new-note-box">
            <div className="edit-title-note">
                <p className="new-note-text">
                    new note...
                </p>
                <div className="new-note-simbals">

                </div>
            </div>

        </div>



    </section>
}
// <i className="fa-solid fa-1x fa-trash"></i>
//<i className="fa-solid fa-1x fa-trash"></i>
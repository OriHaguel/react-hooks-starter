const { useState, useEffect } = React
import { NewNoteEdit } from "./new-note-edit.jsx"
export function NewNote() {

    const [isOpen, setIsOpen] = useState(false)
    function onOpen() {
        setIsOpen(true)
    }
    function onClose() {
        setIsOpen(false)
    }
    return <section className="new-note-section" onClick={onOpen}>

        <div className="new-note-box">
            <div className="edit-title-note">
                <p className="new-note-text">
                    פתק חדש…
                </p>
                <div className="new-note-simbals">
                    <i className="fa-solid fa-1x fa-trash"></i>
                    <i className="fa-solid fa-1x fa-trash"></i>
                </div>
            </div>

            {isOpen && <NewNoteEdit onClose={onClose} />}
        </div>



    </section>
}
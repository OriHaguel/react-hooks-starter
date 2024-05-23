

const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter

import { noteService } from "../../../services/note-service.js"
import { showErrorMsg } from '../../../services/event-bus.service.js'

export function NewNoteEdit({ onCloce }) {

    const [note, setNote] = useState(noteService.getEmptyNote())

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!params.carId) return
        noteService.get(params.noteId)
            .then(note => setNote(note))
    }, [])

    function onSave(ev) {
        console.log(ev);
        ev.preventDefault()
        noteService.save(note)
            .then(() => {
                navigate("/about")
                console.log('rrr');
            })
            .catch(() => {
                console.log('sss');
                showErrorMsg('Couldnt save')
                navigate("/note")
            })
    }

    function handleChange({ target }) {
        const { id, type, name: prop } = target
        console.log(type, prop, id);
        let { value } = target

        switch (id) {

            case 'title':
                value = value
                break;
            case 'text':
                value = value
                break;


        }
        setNote(prevNote => ({ ...prevNote, [prop]: value }))
    }

    // * DEMO
    // function addCarReview(review) {
    //     setCar(prevCar => ({
    //         ...prevCar,
    //         reviews: [...prevCar.reviews, review]
    //     }))
    // }

    return (
        <section className="note-editor">
            <h1>{params.noteId ? 'Edit note' : 'Add note'}</h1>

            <form onSubmit={onSave}>
                <label htmlFor="title">title</label>
                <input
                    onChange={handleChange} value={note.info.title}
                    id="title" name="title"
                    type="text" placeholder="title" />
                <label htmlFor="title">insert text</label>
                <input
                    onChange={handleChange} value={note.info.text}
                    id="text" name="text"
                    type="textarea" placeholder="text" />


                <button>Save</button>
            </form>
            <button onClick={onCloce}>x</button>
        </section>
    )
}


const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter
import { NewNoteTxt } from "../dynamic-new-note/new-note-txt.jsx"
import { NewNoteImg } from "../dynamic-new-note/new-note-img.jsx"
import { noteService } from "../../../../services/note-service.js"
import { showErrorMsg } from '../../../../services/event-bus.service.js'

export function NewNoteEdit({ onCloce, onSaveRender }) {

    const [note, setNote] = useState(noteService.getEmptyNote())
    const [cmpReType, setCmpType] = useState("text")
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!params.noteId) return
        noteService.get(params.noteId)
            .then(note => setNote(note))
    }, [])

    function onSave(ev) {
        ev.preventDefault()
        console.log(onSaveRender);
        onSaveRender(ev, note)
        onCloce()
    }

    function handleChange({ target }) {
        const { id, type, name: prop } = target

        let { value } = target
        console.log(type, prop, id, value);
        switch (id) {
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

    function onToggleCmpType(type) {
        navigate('/note')
        setCmpType(type)
    }

    function DynamicCmp(props) {

        switch (props.cmpType) {
            case 'text':
                return <NewNoteTxt {...props} />
            case 'img':
                return <NewNoteImg {...props} />

        }
    }


    return (

        <DynamicCmp cmpType={cmpReType} note={note} onSave={onSave} handleChange={handleChange} toggleType={onToggleCmpType} />

    )
}

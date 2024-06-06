

const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter
import { utilService } from "../../../../services/util.service.js"
import { NewNoteTxt } from "../dynamic-new-note/new-note-txt.jsx"
import { NewNoteImg } from "../dynamic-new-note/new-note-img.jsx"
import { noteService } from "../../../../services/note-service.js"
import { showErrorMsg } from '../../../../services/event-bus.service.js'
import { NewNoteVideo } from "../dynamic-new-note/new-note-video.jsx"
import { NewNoteLists } from "../dynamic-new-note/new-note-lists.jsx"

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
    function handleChangeTodos(ev, id) {
        const { type, name: prop } = ev.target

        let { value } = ev.target
        console.log(type, prop, id, value);
        value = value
        console.log(note);
        var newList = note.lists.find((list) => list.id === id)
        newList.txt = value
        console.log(newList);
        var newLists = note.lists
        setNote(prevNote => ({ ...prevNote, lists: newLists }))
        console.log(note, note.lists);
    }
    function onAddList() {
        console.log(note);
        if (!note.lists) note.lists = []
        console.log(note);
        note.lists.push({ 'id': utilService.makeId(6), 'txt': '', isCheked: false })
        var newLists = note.lists
        setNote(prevNote => ({ ...prevNote, lists: newLists }))

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
            case 'video':
                return <NewNoteVideo {...props} />
            case 'lists':
                return <NewNoteLists {...props} />


        }
    }
    function handleChangelists(ev, id) {
        const { type, name: prop } = ev.target

        let { value } = ev.target
        console.log(id, value);
        value = value
        console.log(note.lists);
        var newList = note.lists.find((list) => list.id === id)
        console.log(newList);
        newList.txt = value
        console.log(newList);
        var newLists = note.lists
        setNote(prevNote => ({ ...prevNote, lists: newLists }))
        console.log(note, note.lists)
    }

    return (

        <DynamicCmp handleChangelists={handleChangelists} cmpType={cmpReType} note={note} onAddList={onAddList} onSave={onSave} handleChange={handleChange} toggleType={onToggleCmpType} />

    )
}

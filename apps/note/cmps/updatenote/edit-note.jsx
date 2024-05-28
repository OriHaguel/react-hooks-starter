import { EditNoteImg } from "edit-Note-img.jsx"
import { EditNoteText } from "edit-Note-text.jsx"

import { EditNoteVideo } from 'edit-Note-video.jsx'
import { noteService } from "../../../../services/note-service.js"
const { useState, useRef, useEffect } = React
const { useParams, useNavigate } = ReactRouter

export function EditNote({ saveNote, toggleNote, cmp, onRemove }) {


    const params = useParams()
    const [note, setNote] = useState(noteService.getEmptyNote())
    const navigate = useNavigate()

    useEffect(() => {
        console.log(params.noteId);
        noteService.get(params.noteId)
            .then(note => setNote(note))
    }, [params])

    function handleChange({ target }) {
        const { id, type, name: prop } = target

        let { value } = target
        console.log(type, prop, id, note.imgUrl, value);
        value = value

        setNote(prevNote => ({ ...prevNote, [prop]: value }))
        console.log(note, note.imgUrl);
    }
    function onAddNote(ev) {
        ev.preventDefault()

        console.log(ev, note);
        saveNote(ev, note)
        console.log('note:', note)
        toggleNote()




    }

    //onSubmit={onAddNote}
    function DynamicCmp(props) {
        console.log(props);
        if (props.note.imgUrl) return <EditNoteImg {...props} />
        else if (props.note.vidUrl) return <EditNoteVideo {...props} />
        else return <EditNoteText {...props} />




    }



    return (

        <DynamicCmp note={note} onSave={onAddNote} handleChange={handleChange} />

    )


}



/* function onSave(ev) {
        ev.preventDefault()
        noteService.save(note)
            .then(() => navigate('/about'))
            .catch(() => {
                alert('Couldnt save')
                navigate('/about')
            })
    }
        <label className='bold-txt' htmlFor='date'>Date:</label>

                <input
                    type='date'
                    id='date'
                    name='date'
                    value=''
                    onChange={handleChange}
                />
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
    */


//const { fullName, date, txt, rating } = review








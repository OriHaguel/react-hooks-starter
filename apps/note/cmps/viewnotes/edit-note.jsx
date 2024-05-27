
import { noteService } from "../../../../services/note-service.js"
const { useState, useRef, useEffect } = React
const { useParams, useNavigate } = ReactRouter

export function EditNote({ saveNote, toggleNote, onRemove }) {


    const params = useParams()
    const [note, setNote] = useState(noteService.getEmptyNote())
    const navigate = useNavigate()

    useEffect(() => {
        console.log(params.noteId);
        noteService.get(params.noteId)
            .then(note => setNote(note))
    }, [params])
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    function handleChange({ target }) {
        const { id, type, name: prop } = target

        let { value } = target
        console.log(type, prop, id, note.text, value);


        setNote(prevNote => ({ ...prevNote, [prop]: value }))
    }
    function onAddNote(ev) {
        ev.preventDefault()

        console.log(ev, note);
        saveNote(ev, note)
        console.log('note:', note)
        toggleNote()




    }
    //onSubmit={onAddNote}



    return <section className='review-add'>

        <form onSubmit={(ev) => onAddNote(ev)} className='review-form'>
            <div className='review-modal'>
                <h1>edit note</h1>
                <button className='btn-toggle-modal'
                    onClick={toggleNote}>X
                </button>
                <label className='bold-txt' htmlFor='fullname'>Full name:</label>
                <input
                    autoFocus
                    ref={inputRef}
                    placeholder='Enter full name'
                    name='text'
                    type='text'
                    id="text"
                    value={note.text ? note.text : ''}
                    onChange={handleChange}
                    autoComplete='off'
                />

                <label htmlFor="title">title</label>
                <input
                    onChange={handleChange} value={note.title ? note.title : ''}
                    id="title" name="title"
                    type="text" placeholder="title" />



                <button>Save</button>
            </div>
        </form>

    </section>
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








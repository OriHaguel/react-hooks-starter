

const { useState, useEffect } = React
const { Link, useSearchParams } = ReactRouterDOM
import { NotesList } from "../../../apps/note/cmps/noteslist.jsx"
import { NewNote } from "../cmps/new-note.jsx"

import { eventBusService, showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'
//import { utilService } from '../../../services/util.service.js'
import { noteService } from "../../../services/note-service.js"

export function NoteIndex() {

    const [notes, setNotes] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {

        noteService.query()
            .then(notes => {
                setNotes(notes)
                console.log(notes);
            })
    }, [])

    function removeNote(noteId) {

        noteService.remove(noteId)
            .then(() => {
                // utilService.animateCSS('fadeAway')
                //     .then(() => setCars(prevCars => prevCars.filter(car => car.id !== carId)))
                setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId))
                showSuccessMsg(`note (${noteId}) removed successfully!`)
            })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('There was a problem')
            })
            .finally(() => setIsLoading(false))
    }

    function onSetFilterBy(newFilter) {
        setFilterBy({ ...newFilter })
    }

    const isNotes = notes.length > 0
    return <div>note app

        <NewNote />
        {isNotes
            ? <NotesList notes={notes} onRemove={removeNote} />
            : <div>No notes to show...</div>
        }

    </div>
}

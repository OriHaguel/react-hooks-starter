

const { useState, useEffect } = React
const { Link, useSearchParams } = ReactRouterDOM
const { useParams, useNavigate } = ReactRouter
import { NewNoteEdit } from "../cmps/createnote/new-note-edit.jsx"
import { NotesList } from "../cmps/viewnotes/noteslist.jsx"
import { NewNote } from "../cmps/createnote/new-note.jsx"
import { EditNote } from "../cmps/viewnotes/edit-note.jsx"
import { NoteList } from "../cmps/NoteList.jsx"


import { eventBusService, showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'
//import { utilService } from '../../../services/util.service.js'
import { noteService } from "../../../services/note-service.js"

export function NoteIndex() {
    const navigate = useNavigate()
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
        console.log(noteId);
        noteService.remove(noteId)
            .then(() => {
                //  ev.stopPropagation()
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
    const [isShowReviewModal, setIsShowReviewModal] = useState(null)
    function onToggleReviewModal(ev = false) {
        if (ev) ev.stopPropagation()
        console.log(ev);
        navigate('/note')
        setIsShowReviewModal((prevIsReviewModal) => !prevIsReviewModal)
    }
    const [isShowNewNoteModal, setIsShowNewNoteModal] = useState(null)
    function onToggleNewNoteModal() {
        navigate('/note')
        setIsShowNewNoteModal((prevIsReviewModal) => !prevIsReviewModal)
    }
    function onSetRender() {
        console.log(notes);
        noteService.query()
            .then(notes => {
                setNotes(notes)

            })
    }

    function onSave(ev, note) {
        console.log(ev, note);

        noteService.save(note)
            .then((res) => {
                navigate("/note")
                console.log(res);
                noteService.query()
                    .then(notes => {
                        setNotes(notes)
                        console.log(notes);
                    })
            })
            .catch(() => {

                showErrorMsg('Couldnt save')
                navigate("/note")
            })
    }
    const isNotes = notes.length > 0
    return <div>

        {isShowReviewModal && (
            <EditNote saveNote={onSave} onRemove={removeNote} toggleNote={onToggleReviewModal} />)}

        {!isShowNewNoteModal && <NewNote toggle={onToggleNewNoteModal} />}
        {isShowNewNoteModal && <NewNoteEdit onSaveRender={onSave} onCloce={onToggleNewNoteModal} />}
        {isNotes ? <NotesList notes={notes} onRemove={removeNote} onEditNote={onToggleReviewModal} />
            : <div>No notes to show...</div>
        }

    </div>
}
// <NoteList />
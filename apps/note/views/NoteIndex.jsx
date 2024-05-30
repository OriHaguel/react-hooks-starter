

const { useState, useEffect } = React
const { Link, useSearchParams } = ReactRouterDOM
const { useParams, useNavigate } = ReactRouter
import { EditNote } from "../cmps/updatenote/edit-note.jsx"
import { NewNoteEdit } from "../cmps/createnote/new-note-edit.jsx"
import { NotesList } from "../cmps/viewnotes/noteslist.jsx"
import { NewNote } from "../cmps/createnote/new-note.jsx"
import { NotesFilter } from "../cmps/notes-filter.jsx"
import { NoteList } from "../cmps/NoteList.jsx"



import { eventBusService, showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'
//import { utilService } from '../../../services/util.service.js'
import { noteService } from "../../../services/note-service.js"
import { utilService } from "../../../services/util.service.js"

export function NoteIndex() {
    const navigate = useNavigate()
    const [notes, setNotes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isShowReviewModalColor, setIsShowReviewModalColor] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams()
    const [filterBy, setFilterBy] = useState(noteService.getFilterFromSearchParams(searchParams))
    console.log(EditNote);

    useEffect(() => {

        noteService.query(filterBy)
            .then(notes => {
                setNotes(notes)
                console.log(notes);
            })
    }, [filterBy])


    function removeNote(noteId) {
        console.log(noteId);
        noteService.remove(noteId)
            .then(() => {
                //  ev.stopPropagation()
                // utilService.animateCSS('fadeAway')
                //     .then(() => setCars(prevCars => prevCars.filter(car => car.id !== carId)))
                setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId))
                showSuccessMsg(`note (${noteId}) removed successfully!`)
                navigate('/note')
            })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('There was a problem')
            })
            .finally(() => setIsLoading(false))
    }

    function onSetFilterBy(filter) {
        console.log(filter);
        setFilterBy(prevFilter => ({ ...prevFilter, ...filter }))
    }
    const [isShowReviewModal, setIsShowReviewModal] = useState(null)
    function onToggleReviewModal(ev = false, type = false) {
        if (ev) ev.stopPropagation()

        console.log(ev);

        setIsShowReviewModal((prevIsReviewModal) => !prevIsReviewModal)
    }
    function onToggleReviewModalColor(ev = false, type = false) {
        if (ev) ev.stopPropagation()

        console.log(ev);

        setIsShowReviewModalColor((prevIsReviewModal) => !prevIsReviewModal)
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
        if (note.lists && typeof note.lists === "string") {
            var todos = note.lists.split('\n').map((list) => { return { 'id': utilService.makeId(6), 'txt': list } })
            note.lists = todos
        }



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
    function togglePinned(ev, note) {
        note.isPinned = !note.isPinned
        onSave(ev, note)

    }
    const isNotes = notes.length > 0
    return <div>
        <NotesFilter onSetFilter={onSetFilterBy} filterBy={filterBy} />
        {isShowReviewModal && <EditNote saveNote={onSave} onRemove={removeNote} toggleNote={onToggleReviewModal} />}
        {!isShowNewNoteModal && <NewNote toggle={onToggleNewNoteModal} />}
        {isShowNewNoteModal && <NewNoteEdit onSaveRender={onSave} onCloce={onToggleNewNoteModal} />}
        {<NotesList isShowReviewModalColor={isShowReviewModalColor} onToggleReviewModalColor={onToggleReviewModalColor} onSaveRender={onSave}
            notes={notes.filter((note) => note.isPinned === true)} onRemove={removeNote} onEditNote={onToggleReviewModal} togglePinned={togglePinned} />

        }
        <div>No pined to show...</div>
        {isNotes ? <NotesList notes={notes.filter((note) => note.isPinned === false)} onRemove={removeNote} onEditNote={onToggleReviewModal} togglePinned={togglePinned} />
            : <div>No notes to show...</div>
        }


    </div>
}
// <NoteList />
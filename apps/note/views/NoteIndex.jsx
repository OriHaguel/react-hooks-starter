

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
    const [isShowTrashToggle, setisShowTrashToggle] = useState(false)
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

        setFilterBy(prevFilter => ({ ...prevFilter, ...filter }))
    }
    const [isShowReviewModal, setIsShowReviewModal] = useState(null)
    function onToggleReviewModal(ev = false, type = false) {
        if (ev) ev.stopPropagation()



        setIsShowReviewModal((prevIsReviewModal) => !prevIsReviewModal)
    }
    function onToggleTrash(ev = false, isTrash) {
        if (ev) ev.stopPropagation()



        setisShowTrashToggle(isTrash)
    }
    function onToggleReviewModalColor(ev = false, note) {
        if (ev) ev.stopPropagation()

        note.isShowReviewModalColor = !note.isShowReviewModalColor
        setIsShowReviewModalColor((prevIsReviewModal) => !prevIsReviewModal)
    }
    const [isShowNewNoteModal, setIsShowNewNoteModal] = useState(null)
    function onToggleNewNoteModal() {
        navigate('/note')
        setIsShowNewNoteModal((prevIsReviewModal) => !prevIsReviewModal)
    }
    function onSetRender() {

        noteService.query()
            .then(notes => {
                setNotes(notes)

            })
    }

    function onSave(ev, note) {

        if (!note.color) note.color = 'w'
        if (!note.isShowReviewModalColor) note.isShowReviewModalColor = false

        if (note.lists && typeof note.lists === "string") {
            var todos = note.lists.split('\n').map((list) => { return { 'id': utilService.makeId(6), 'txt': list } })
            note.lists = todos
        }



        noteService.save(note)
            .then((res) => {
                navigate("/note")

                noteService.query()
                    .then(notes => {
                        setNotes(notes)

                    })
            })
            .catch(() => {

                showErrorMsg('Couldnt save')
                navigate("/note")
            })
    }

    function onSaveMailToNote(mail) {
        onSave(mail)
        navigate(`/note/${mail.id}`)
        setIsShowReviewModal(true)

    }
    function togglePinned(ev, note) {
        note.isPinned = !note.isPinned
        onSave(ev, note)

    }
    function moveToTrashToggle(ev, note) {
        note.isDeleted = !note.isDeleted
        onSave(ev, note)

    }

    function saveAsEmail(note) {
        if (!note.subject) note.subject = 'this is very important'
        note.isRead = false
        note.sentAt = Date.now(),
            note.isSent = true,
            note.isStared = false,
            note.isDeleted = false,
            note.removedAt = null,
            note.from = 'momo@momo.com',
            note.to = 'user@appsus.com'
        note.body = note.text

        noteService.saveAsEmail(note).then((res) => {
            navigate("/note")


        })
            .catch(() => {

                showErrorMsg('Couldnt save')
                navigate("/note")
            })
    }
    const isNotes = notes.length > 0
    return <div>

        {!isShowTrashToggle && isShowReviewModal && <EditNote saveNote={onSave} onRemove={removeNote} toggleNote={onToggleReviewModal} />}
        {!isShowTrashToggle && !isShowNewNoteModal && <NewNote toggle={onToggleNewNoteModal} />}
        {!isShowTrashToggle && isShowNewNoteModal && <NewNoteEdit onSaveRender={onSave} onCloce={onToggleNewNoteModal} />}
        <NotesFilter onSetFilter={onSetFilterBy} filterBy={filterBy} />
        {notes.filter((note) => note.isPinned === true && note.isDeleted === false).length > 0 && <div> pined keeps</div>}

        {!isShowTrashToggle && <NotesList moveToTrashToggle={moveToTrashToggle} saveAsEmail={saveAsEmail} isShowReviewModalColor={isShowReviewModalColor} onToggleReviewModalColor={onToggleReviewModalColor} onSaveRender={onSave}
            notes={notes.filter((note) => note.isPinned === true && note.isDeleted === false)} onRemove={removeNote} onEditNote={onToggleReviewModal} togglePinned={togglePinned} />
        }

        {!isShowTrashToggle && notes.filter((note) => note.isPinned === true && note.isDeleted === false).length > 0 && <div>Non pined keeps</div>}
        {!isShowTrashToggle && isNotes ? <NotesList moveToTrashToggle={moveToTrashToggle}
            saveAsEmail={saveAsEmail} notes={notes.filter((note) => note.isPinned === false && note.isDeleted === false)} onRemove={removeNote} onEditNote={onToggleReviewModal} togglePinned={togglePinned}
            onToggleReviewModalColor={onToggleReviewModalColor} onSaveRender={onSave} isShowReviewModalColor={isShowReviewModalColor} />
            : <div>No notes to show...</div>
        }

        {isShowTrashToggle && <NotesList moveToTrashToggle={moveToTrashToggle}
            saveAsEmail={saveAsEmail} notes={notes.filter((note) => note.isDeleted === true)} onRemove={removeNote} onEditNote={onToggleReviewModal} togglePinned={togglePinned}
            onToggleReviewModalColor={onToggleReviewModalColor} onSaveRender={onSave} isShowReviewModalColor={isShowReviewModalColor} />
        }
        {<NoteList onToggleTrash={onToggleTrash} />}


    </div>
}
// <NoteList />
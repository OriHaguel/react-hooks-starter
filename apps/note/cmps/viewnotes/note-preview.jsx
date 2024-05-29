import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteVideo } from './NoteVideo.jsx'
import { NoteTodos } from './NoteTodos.jsx'




export function NotePreview({ note, onRemove, onEditNote, togglePinned }) {

    function DynamicCmp(props) {

        if (props.note.imgUrl) return <NoteImg {...props} />
        else if (props.note.vidUrl) return <NoteVideo {...props} />
        else if (props.note.lists) return <NoteTodos {...props} />
        else if (props.note.text) return <NoteText {...props} />
    }


    return (

        <DynamicCmp togglePinned={togglePinned} cmpType={note.type} note={note} onRemove={onRemove} onEditNote={onEditNote} />

    )
}
//
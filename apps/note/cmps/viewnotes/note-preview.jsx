import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteVideo } from './NoteVideo.jsx'
import { NoteTodos } from './NoteTodos.jsx'
const { useState, useRef, useEffect } = React



export function NotePreview({ isShowReviewModalColor, onToggleReviewModalColor,
    note, onRemove, onEditNote, togglePinned, onSave }) {



    function DynamicCmp(props) {

        if (props.note.imgUrl) return <NoteImg {...props} />
        else if (props.note.vidUrl) return <NoteVideo {...props} />
        else if (props.note.lists) return <NoteTodos {...props} />
        else if (props.note.text) return <NoteText {...props} />
    }


    return (

        <DynamicCmp onToggleReviewModalColor={onToggleReviewModalColor} isShowReviewModalColor={isShowReviewModalColor} togglePinned={togglePinned} cmpType={note.type} note={note} onRemove={onRemove} onEditNote={onEditNote} onSave={onSave} />

    )
}
//
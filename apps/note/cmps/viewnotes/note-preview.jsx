import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteVideo } from './NoteVideo.jsx'
import { NoteTodos } from './NoteTodos.jsx'
const { useState, useRef, useEffect } = React



export function NotePreview({ moveToTrashToggle, isShowReviewModalColor, onToggleReviewModalColor,
    note, onRemove, onEditNote, togglePinned, onSave, saveAsEmail, handleChangeTodosCheck }) {

    console.log(onToggleReviewModalColor);

    function DynamicCmp(props) {

        if (props.note.imgUrl) return <NoteImg {...props} />
        else if (props.note.vidUrl) return <NoteVideo {...props} />
        else if (props.note.lists) return <NoteTodos {...props} />
        else if (props.note.text || props.note.text === '') return <NoteText {...props} />
    }


    return (

        <DynamicCmp moveToTrashToggle={moveToTrashToggle} handleChangeTodosCheck={handleChangeTodosCheck} saveAsEmail={saveAsEmail} onToggleReviewModalColor={onToggleReviewModalColor} isShowReviewModalColor={isShowReviewModalColor} togglePinned={togglePinned} cmpType={note.type} note={note} onRemove={onRemove} onEditNote={onEditNote} onSave={onSave} />

    )
}
//
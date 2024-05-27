import { NoteText } from '../createnote/NoteText.jsx'




export function NotePreview({ note, onRemove, onEditNote }) {

    function DynamicCmp(props) {

        switch (props.cmpType) {
            case 'text':
                return <NoteText {...props} />
            case 'img':
                return <NoteImg {...props} />
            case 'video':
                return <NoteVideo {...props} />
            case 'todos':
                return <NoteTodos {...props} />

        }
    }


    return (

        <DynamicCmp cmpType={note.type} note={note} onRemove={onRemove} onEditNote={onEditNote} />

    )
}
//
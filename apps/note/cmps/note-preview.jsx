import { NoteText } from '../cmps/dynamic/NoteText.jsx'




export function NotePreview({ note }) {

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

        <DynamicCmp cmpType={note.type} note={note} />

    )
}
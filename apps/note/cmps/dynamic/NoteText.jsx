export function NoteText(props) {
    return <article className="note-preview">
        <h3>{props.note.title}</h3>
        <p>{props.note.text} </p>
    </article>
}




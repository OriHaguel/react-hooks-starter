export function NoteText(props) {
    const id = props.note.id
    const remove = (id) => {
        props.onRemove(id)
    }
    const update = (ev) => {
        console.log(ev);
        props.onEditNote(ev)
    }
    return <article className="note-preview">
        <p>{props.note.text} </p>
        <input className="btn-color" type="color" value="#ffffff" ></input>
        <button className="btn-update" onClick={(ev) => update(ev)} ></button>
        <button className="btn-remove" onClick={() => remove(id)} ></button>

    </article>
}




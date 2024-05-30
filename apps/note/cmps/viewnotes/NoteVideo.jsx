export function NoteVideo(props) {
    const id = props.note.id
    const remove = (id) => {
        props.onRemove(id)
    }
    const update = (ev) => {
        console.log(ev);
        props.onEditNote(ev)
    }
    return <article className="note-preview">
        <div className="video-player-container">
            <iframe width="250" height="150" src={props.note.vidUrl}>
            </iframe>
        </div>

        <p>{props.note.text} </p>
        <input className="btn-color" type="color" value="#ffffff" onChange={(ev) => console.log(ev)} ></input>
        <button className="btn-update" onClick={(ev) => update(ev)} ></button>
        <button className="btn-remove" onClick={() => remove(id)} ></button>
        <button onClick={(ev) => props.togglePinned(ev, props.note)}>p</button>

    </article>
}




/*

*/
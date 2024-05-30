export function NoteTodos(props) {

    const id = props.note.id
    const remove = (id) => {
        props.onRemove(id)
    }
    const update = (ev) => {
        console.log(ev);
        props.onEditNote(ev)
    }

    return <article className="note-preview">
        {props.note.lists.map(line => {
            return <p key={line.id}><input type="checkbox" id={line.id} name={line.id} />
                <label htmlFor={line.id}>{' ' + line.txt}</label></p>
        })}
        <input className="btn-color" type="color" value="#ffffff" onChange={(ev) => console.log(ev)}></input>
        <button className="btn-update" onClick={(ev) => update(ev)} ></button>
        <button className="btn-remove" onClick={() => remove(id)} ></button>
        <button onClick={(ev) => props.togglePinned(ev, props.note)}>p</button>

    </article>
}




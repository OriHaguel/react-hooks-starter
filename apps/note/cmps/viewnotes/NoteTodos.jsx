import { ColorPicker } from "color-picker.jsx"


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
            return <p key={line.id}><input type="checkbox" checked={line.isCheked} className="input-check-note" id={line.id} name={line.id} onClick={(ev) => props.handleChangeTodosCheck(ev, props.note, line.id)} />
                <label htmlFor={line.id}>{' ' + line.txt}</label></p>
        })}
        <button className="btn-color" type="color" value="#ffffff" onClick={(ev) => props.onToggleReviewModalColor(ev, props.note)} ></button>
        <button className="btn-update" onClick={(ev) => update(ev)} ></button>
        <button className="btn-remove" onClick={() => remove(id)} ></button>
        <button className="btn-pin" onClick={(ev) => props.togglePinned(ev, props.note)}>p</button>
        {props.note.isShowReviewModalColor && <ColorPicker note={props.note} onSave={props.onSave} />}

    </article>
}




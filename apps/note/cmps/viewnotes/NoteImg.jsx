import { ColorPicker } from "./color-picker.jsx"
export function NoteImg(props) {
    const id = props.note.id
    const remove = (id) => {
        props.onRemove(id)
    }
    const update = (ev) => {
        console.log(ev);
        props.onEditNote(ev)
    }
    return <article className="note-preview">
        <img src={props.note.imgUrl} alt="" />
        <p>{props.note.text} </p>
        <button className="btn-color" type="color" value="#ffffff" onClick={(ev) => props.onToggleReviewModalColor(ev)} ></button>
        <button className="btn-update" onClick={(ev) => update(ev)} ></button>
        <button className="btn-remove" onClick={() => remove(id)} ></button>
        <button onClick={(ev) => props.togglePinned(ev, props.note)}>p</button>
        {props.note.isShowReviewModalColor && <ColorPicker note={props.note} onSave={props.onSave} />}

    </article>
}




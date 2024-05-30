
import { ColorPicker } from "./color-picker.jsx"

export function NoteText(props) {


    //const isColorOpen = useRef(false)


    console.log(props.isShowReviewModalColor)

    const id = props.note.id
    const remove = (id) => {
        props.onRemove(id)
    }

    const update = (ev) => {
        console.log(ev);
        props.onEditNote(ev)
    }

    function onChangePicker(note, color) {
        note.color = color
        onSave(note)
    }

    return <article className="note-preview">
        <p>{props.note.text} </p>
        <button className="btn-color" type="color" value="#ffffff" onClick={(ev) => props.onToggleReviewModalColor(ev)} ></button>
        <button className="btn-update" onClick={(ev) => update(ev)} ></button>
        <button className="btn-remove" onClick={() => remove(id)} ></button>
        <button onClick={(ev) => props.togglePinned(ev, props.note)}>p</button>
        {props.isShowReviewModalColor && <ColorPicker note={props.note} onChangePicker={onChangePicker} />}


    </article>
}




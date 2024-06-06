
import { ColorPicker } from "./color-picker.jsx"

export function NoteText(props) {


    //const isColorOpen = useRef(false)


    console.log(props.note)

    const id = props.note.id
    const remove = (id) => {
        props.onRemove(id)
    }

    const update = (ev) => {
        console.log(ev);
        props.onEditNote(ev)
    }



    return <article className={`note-preview ${props.note.color}`}>

        <p className="subject-note">{props.note.subject} </p>
        <p >{props.note.body && props.note.body} </p>
        <p className="body-text">{props.note.text} </p>
        <button className="btn-color" type="color" value="#ffffff" onClick={(ev) => props.onToggleReviewModalColor(ev, props.note)} ></button>
        <button className="btn-update" onClick={(ev) => update(ev)} ></button>
        <button className="btn-remove" onClick={(ev) => props.note.isDeleted === true ? remove(props.note.id) : props.moveToTrashToggle(ev, props.note)} ></button>
        <button className="btn-pin" onClick={(ev) => props.togglePinned(ev, props.note)}>p</button>
        <button className="btn-mail" onClick={() => props.saveAsEmail(props.note)}></button>
        {props.note.isShowReviewModalColor && <ColorPicker note={props.note} onSave={props.onSave} />}


    </article>
}




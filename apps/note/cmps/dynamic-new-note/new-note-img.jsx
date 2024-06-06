import { ColorPicker } from "./color-picker.jsx"

const { useState, useRef, useEffect } = React
export function NewNoteImg(props) {
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
        console.log(inputRef.current);
    }, [inputRef.current])
    return (
        <section className="add-note-container">

            <div className="add-note-controller">
                <nav className="nav-add-note">
                    <button className="btn-txt " onClick={() => props.toggleType("text")}  ></button>
                    <button className="btn-img btn-active" ></button>
                    <button className="btn-video" onClick={() => props.toggleType("video")} ></button>
                    <button className="btn-list" onClick={() => props.toggleType("lists")} ></button>
                </nav>
                <form onSubmit={props.onSave}>
                    <textarea ref={inputRef} className="textarea-add-note url" id="text" name="imgUrl" value={props.note.imgUrl ? props.note.imgUrl : ''} placeholder="Enter url..." onChange={props.handleChange} />

                    <textarea ref={inputRef} className="textarea-add-note" id="text" name="text" value={props.note.text ? props.note.text : ''} placeholder="Enter text..." onChange={props.handleChange} />
                    <button className="note-save" >Save note</button>
                </form>

            </div>
        </section>
    )
}
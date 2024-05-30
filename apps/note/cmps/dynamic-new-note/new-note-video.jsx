export function NewNoteVideo(props) {
    return (
        <section className="add-note-container">

            <div className="add-note-controller">
                <nav className="nav-add-note">
                    <button className="btn-txt " onClick={() => props.toggleType("text")}  ></button>
                    <button className="btn-img " onClick={() => props.toggleType("img")} ></button>
                    <button className="btn-video btn-active"  ></button>
                    <button className="btn-list" onClick={() => props.toggleType("lists")} ></button>
                </nav>
                <form onSubmit={props.onSave}>
                    <textarea autoFocus className="textarea-add-note url" id="text" name="vidUrl" value={props.note.vidUrl ? props.note.vidUrl : ''} placeholder="Enter url..." onChange={props.handleChange} />
                    <textarea autoFocus className="textarea-add-note" id="text" name="text" value={props.note.text ? props.note.text : ''} placeholder="Enter description..." onChange={props.handleChange} />

                    <button className="note-save" >Save note</button>
                </form>

            </div>
        </section>
    )
}
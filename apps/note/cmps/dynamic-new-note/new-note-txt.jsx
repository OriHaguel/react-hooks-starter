
export function NewNoteTxt(props) {
    return (
        <section className="add-note-container">

            <div className="add-note-controller">
                <nav className="nav-add-note">
                    <button className="btn-txt btn-active"  ></button>
                    <button className="btn-img" onClick={() => props.toggleType("img")}></button>
                    <button className="btn-video" onClick={() => props.toggleType("video")} ></button>
                    <button className="btn-list" onClick={() => props.toggleType("lists")} ></button>
                </nav>
                <form autoFocus onSubmit={props.onSave}>
                    <textarea autoFocus className="textarea-add-note" id="text" name="text" value={props.note.text ? props.note.text : ''} placeholder="Enter text..." onChange={props.handleChange} />
                    <button className="note-save" >Save note</button>
                </form>

            </div>
        </section>
    )
}
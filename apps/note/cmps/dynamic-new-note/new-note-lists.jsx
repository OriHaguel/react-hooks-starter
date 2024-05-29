
export function NewNoteLists(props) {
    return (
        <section className="add-note-container">

            <div className="add-note-controller">
                <nav className="nav-add-note">
                    <button className="btn-txt"  ></button>
                    <button className="btn-img" onClick={() => props.toggleType("img")}></button>
                    <button className="btn-video" onClick={() => props.toggleType("video")} ></button>
                    <button className="btn-list btn-active"  ></button>
                </nav>
                <form autoFocus onSubmit={props.onSave}>
                    <textarea autoFocus className="textarea-add-note" id="text" name="lists" value={props.note.lists ? props.note.lists : ''} placeholder="Enter text..." onChange={props.handleChange} />
                    <button className="note-save" >Save note</button>
                </form>

            </div>
        </section>
    )
}
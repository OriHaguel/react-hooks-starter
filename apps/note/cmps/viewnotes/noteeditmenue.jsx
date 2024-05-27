export function MenuEditor(onRemove, note, onCloce) {
    return <section className="notes-list">
        <ul className="menu-container">
            <li className="menu-child delete-note" key={note.id} onClick={(ev) => onRemove(note.id)}>
                remove
            </li>
            <li className="menu-child tag-note">
                tag
            </li>
            <button onClick={onCloce}></button>
            <li className="menu-child close-menu" onClick={onCloce}>
                close
            </li>
        </ul>
    </section>

}
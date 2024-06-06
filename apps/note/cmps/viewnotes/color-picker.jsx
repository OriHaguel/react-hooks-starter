export function ColorPicker({ note, onSave }) {
    console.log(note)
    function onChangePicker(ev, note, color) {
        console.log(note.color, note)
        note.color = color



    }

    const artColor = [
        'FAAFA7',
        , 'F39F76',
        'FFF8B8',

        'E2F5D3'
    ]
    return <div className="color-picker-container">
        {artColor.map(color => <button key={color} className={`button-picker ${color}`} onClick={(ev) => onChangePicker(ev, note, color)}></button>
        )}
    </div>


}
export function ColorPicker(onChangePicker, note) {
    const artColor = [
        '#FAAFA7',
        , '#F39F76',
        '#FFF8B8',

        '#E2F5D3'
    ]
    return <div className="color-picker-container">
        {artColor.map(color => <button key={color} className={`button-picker ${color}`} onClick={() => onChangePicker(note, color)}></button>
        )}
    </div>


}
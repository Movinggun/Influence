
const CustomCheckBox = ( { label, onClick } ) => {
    return (
        <label className="check-container">
            {label}
            <input type="checkbox"/>
            <span className="checkmark"></span>
        </label>
    )
}

export default CustomCheckBox


const CustomCheckBox = ( { label, onClick } ) => {
    return (
        <label class="check-container">
            {label}
            <input type="checkbox"/>
            <span class="checkmark"></span>
        </label>
    )
}

export default CustomCheckBox

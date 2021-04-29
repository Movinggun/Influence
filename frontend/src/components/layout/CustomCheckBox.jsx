
import { connect } from 'react-redux';

const CustomCheckBox = ( { label, onChange, influencer, name } ) => {

    return (
        <label className="check-container">
            {label}
            <input  onChange={onChange} name={name} type="checkbox" checked={influencer.filters[label]}/>
            <span className="checkmark"></span>
        </label>
    )
}

const mapStateToProps = (state) => ({
    influencer: state.influencer
});


export default connect(mapStateToProps) (CustomCheckBox)

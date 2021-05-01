import React from 'react'
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import { setCheckboxFilters, filterInfluencers } from '../../actions/influencerActions'

const RatingRadio = ({ influencer, setCheckboxFilters, filterInfluencers }) => {


    const onClick = (e) => {
        const newFilters = {
            ...influencer.filters,
            Rating: e.target.name
        }
        setCheckboxFilters(newFilters);
        filterInfluencers()
    }

    return (
        <>
            <Button name="1" onClick={onClick} variant={"contained"} style={influencer.filters.Rating == 1 ? { background: 'linear-gradient(to right, #F9E9AD , #FACD7F)' , minWidth: 0, width: '35px', height: '33px', marginRight: '8px' } : { backgroundColor: '#666E80' , color:'white', minWidth: 0, width: '35px', height: '33px', marginRight: '8px' } }> <a name="1"  onClick={onClick}>All</a></Button>
            <Button name="2" onClick={onClick} variant={"contained"} style={influencer.filters.Rating == 2 ? { background: 'linear-gradient(to right, #F9E9AD , #FACD7F)' , minWidth: 0, width: '35px', height: '33px', marginRight: '8px' } : { backgroundColor: '#666E80' , color:'white', minWidth: 0, width: '35px', height: '33px', marginRight: '8px' } }><a name="2"  onClick={onClick}>2+</a></Button>
            <Button name="3" onClick={onClick} variant={"contained"} style={influencer.filters.Rating == 3 ? { background: 'linear-gradient(to right, #F9E9AD , #FACD7F)' , minWidth: 0, width: '35px', height: '33px', marginRight: '8px' } : { backgroundColor: '#666E80' , color:'white', minWidth: 0, width: '35px', height: '33px', marginRight: '8px' } }><a name="3"  onClick={onClick}>3+</a></Button>
            <Button name="4" onClick={onClick} variant={"contained"} style={influencer.filters.Rating == 4 ? { background: 'linear-gradient(to right, #F9E9AD , #FACD7F)' , minWidth: 0, width: '35px', height: '33px', marginRight: '8px' } : { backgroundColor: '#666E80' , color:'white', minWidth: 0, width: '35px', height: '33px', marginRight: '8px' } }><a name="4"  onClick={onClick}>4+</a></Button>
            <Button name="5" onClick={onClick} variant={"contained"} style={influencer.filters.Rating == 5 ? { background: 'linear-gradient(to right, #F9E9AD , #FACD7F)' , minWidth: 0, width: '35px', height: '33px', marginRight: '8px' } : { backgroundColor: '#666E80' , color:'white', minWidth: 0, width: '35px', height: '33px', marginRight: '8px' } }><a name="5"  onClick={onClick}>5</a></Button>
        </>
    )
}

const mapStateToProps = (state) => ({
    influencer: state.influencer
});


export default connect(mapStateToProps, {setCheckboxFilters, filterInfluencers}) (RatingRadio)

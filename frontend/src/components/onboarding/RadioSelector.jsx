import React, { useState } from 'react'
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { setAccountBranch } from '../../actions/authActions';


const RadioSelector = ({setAccountBranch, auth}) => {

    const onChange = (e) => {
        console.log(auth.selectedAccountBranch)
        setAccountBranch(e.target.value)
    }

    const styleRadio ={
        background: 'linear-gradient(to right, #F9E9AD , #FACD7F)',
        color: '#13151D'
    }

    const styleRadioChecked ={
        border: 0
    }


    return (
        <Box>
            <label style={auth.selectedAccountBranch === 'influencer' ? styleRadio : {}} className="container-radio">I'm an influencer
            <input onChange={onChange}type="radio" name="radio1" value="influencer"  checked={auth.selectedAccountBranch === 'influencer' ?  "checked" : ''}/>
            <span  style={auth.selectedAccountBranch === 'influencer' ? styleRadioChecked : {}} className="checkmark-radio"></span>
            </label>  
            <label style={auth.selectedAccountBranch === 'service_provider' ? styleRadio : {}}  className="container-radio">I'm a service provider
            <input onChange={onChange} type="radio" name="radio1"  value="service_provider"/>
            <span style={auth.selectedAccountBranch === 'service_provider' ? styleRadioChecked : {}} className="checkmark-radio"></span>
            </label>  
            <label style={auth.selectedAccountBranch === 'brand' ? styleRadio : {}} className="container-radio">I'm a brand / company
            <input onChange={onChange} type="radio" name="radio1" value="brand"/>
            <span style={auth.selectedAccountBranch === 'brand' ? styleRadioChecked : {}} className="checkmark-radio"></span>
            </label> 
        </Box>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});


export default connect(mapStateToProps, {setAccountBranch}) (RadioSelector)

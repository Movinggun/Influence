import React, { useRef } from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import {Typography} from "@material-ui/core";
import Input from '@material-ui/core/Input';
import CustomCheckBox from '../layout/CustomCheckBox'
import RatingRadio from './RatingRadio';
import InputAdornment from '@material-ui/core/InputAdornment';
import { connect } from 'react-redux';
import {setSearchTextBox, clearFilters, filterInfluencers, setCheckboxFilters } from '../../actions/influencerActions' 


const Filterbar = ({ setSearchTextBox, clearFilters, filterInfluencers,  influencer, setCheckboxFilters }) => {
    const text = useRef('');

    const onChange = (e) => {
        if (text.current.value !== '') {
            setSearchTextBox(e.target.value);
            filterInfluencers()
        } else {
            clearFilters();
        }
    }


    const onChangeCheckbox = (e) => {
        const newFilters = {
            ...influencer.filters,
            [e.target.name]: e.target.checked
        }
        console.log(newFilters)
        console.log(e.target.name + ':' + e.target.checked)
        setCheckboxFilters(newFilters);
        filterInfluencers()
    }

    return (
        <Card style={{backgroundColor: '#13151D', height: '50%', marginLeft: '50px', marginTop: '25px'}}>
            <CardContent> 
            <Typography style={{color: '#FFFFFF'}}>
                Search by Name
            </Typography>  
            <Input name="search" placeholder="Name" ref={text} onChange={onChange} value={influencer.searchTextContent !== null ? influencer.searchTextContent : ''}  style={{width: '100%' , margin: 0, marginBottom: 1, marginTop: 5, paddingLeft: 10, paddingTop: 2, paddingBottom: 2, backgroundColor: '#181C24', borderRadius: 3, color: '#BAC1D9',  border: '1px solid #666E80'}} 
            startAdornment={
                <InputAdornment position="start">
                    <Box style={{marginTop: '5px'}}>
                        <img src="/icons/icon-search.svg" style={{height:'16px'}} alt="Influence Search Icon"/>
                    </Box>
                </InputAdornment>
            }/>
            <hr style={{ border: '0', height:'1px', background: '#2D3445'}}/>
            <Typography style={{color: '#FFFFFF'}}>
                Customer Rating
            </Typography>  
            <Box mt={1}>
                <RatingRadio />
            </Box>
            <hr style={{ border: '0', height:'1px', background: '#2D3445'}}/>
            <Typography style={{color: '#FFFFFF'}}>
                Services
            </Typography> 
            <Box mt={1}>
                <CustomCheckBox onChange={onChangeCheckbox} label='Emotes' name='Emotes'/>
                <CustomCheckBox onChange={onChangeCheckbox} label='Animations' name='Animations'/>
                <CustomCheckBox onChange={onChangeCheckbox} label='Music' name='Music'/>
                <CustomCheckBox onChange={onChangeCheckbox} label='Tax' name='Tax'/>
                <CustomCheckBox onChange={onChangeCheckbox} label='Overlays' name='Overlays'/>
                <CustomCheckBox onChange={onChangeCheckbox} label='Branding' name='Branding'/>
                <CustomCheckBox onChange={onChangeCheckbox} label='Coding' name='Coding'/>
            </Box> 
            <hr style={{ border: '0', height:'1px', background: '#2D3445'}}/>
            <Typography style={{color: '#FFFFFF'}}>
                Verified
            </Typography>  
            <Box mt={1}>
                <CustomCheckBox name="Verified"  onChange={onChangeCheckbox} label='Only Show Verified Users'/>
            </Box> 
            <hr style={{ border: '0', height:'1px', background: '#2D3445'}}/>
            </CardContent>
        </Card>
    )
}


const mapStateToProps = (state) => ({
    influencer: state.influencer
});

export default connect(mapStateToProps, {setSearchTextBox, clearFilters, filterInfluencers, setCheckboxFilters}) (Filterbar)

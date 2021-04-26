import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import Navbar from '../layout/Navbar'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import LandingCard from "../landing/LandingCard";
import FilterBar from './Filterbar'
import InfluencerCard from './InfluencerCard'
import { loadInfluencers } from '../../actions/influencerActions' 

const Influencers = ({influencer, loadInfluencers}) => {

    useEffect(() => {
            loadInfluencers();
        // eslint-disable-next-line
    }, []);

    const {influencers} = influencer;
    console.log(influencers);


    return (
        <div>
            <Navbar />
            <Box  style={{marginRight: '14%', marginLeft: '13%'}}>
            <Grid container spacing={4}>
                <Grid style={{height: '100%'}} item xs={3}>
                    <FilterBar />
                </Grid>
                <Grid item xs={9}>
                    <Box style={{float: 'right', color: 'white', marginTop: '25px'}}>Sort by <strong> Highest Rating <img src="/images/down_arrow.svg" alt=""/></strong></Box>
                    <Box style={{color: 'white',  marginTop: '25px'}}>{ influencers !== null && influencers.length} Influencers Available</Box>
                    <Box mb={1} style={{color: '#BAC1D9', fontSize: '12px',  marginTop: '3px'}}>Clear all filters</Box>
                    <Grid container spacing={5}  direction="row" justify="flex-start" alignItems="flex-start">
                        { influencers !== null && influencers.map(i => (
                            <Grid key={i._id} item xs={9} lg={4} xl={4}>
                                <InfluencerCard displayName={i.user_info[0].display_name} level={i.level} verified={i.verified} description={i.card_description} rating={i.rating} price={i.starting_payment} socials={i.social_media}/>
                            </Grid>
                        ))}
  

                    </Grid>
                </Grid>

            </Grid>
            </Box>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    influencer: state.influencer
});

export default connect(mapStateToProps, {loadInfluencers}) (Influencers)

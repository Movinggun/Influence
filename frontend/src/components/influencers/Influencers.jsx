import React from 'react'
import Navbar from '../layout/Navbar'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import LandingCard from "../landing/LandingCard";
import FilterBar from './Filterbar'
import InfluencerCard from './InfluencerCard'

const Influencers = () => {

    

    return (
        <div style={{backgroundColor: '#202530', height: '100%', backgroundSize: 'cover' }}>
            <Navbar />
            <Box mr={30} ml={30}>
            <Grid container spacing={4}>
                <Grid item xs={3}>
                    <FilterBar />
                </Grid>
                <Grid item xs={9}>
                    <Box style={{float: 'right', color: 'white', marginTop: '25px'}}>Sort by <strong> Highest Rating <img src="/images/down_arrow.svg" alt=""/></strong></Box>
                    <Box style={{color: 'white',  marginTop: '25px'}}>24 Influencers Available</Box>
                    <Box mb={1} style={{color: '#BAC1D9', fontSize: '12px',  marginTop: '3px'}}>Clear all filters</Box>
                    <Grid container spacing={6}  direction="row" justify="space-around" alignItems="center">
                        <Grid item xs={12} lg>
                            <InfluencerCard />
                        </Grid>
                        <Grid item xs={12} lg>
                        <InfluencerCard />
                        </Grid>
                        <Grid item xs={12} lg>
                        <InfluencerCard />
                        </Grid>

                    </Grid>
                    <Grid container spacing={6}  direction="row" justify="space-around" alignItems="center">
                        <Grid item xs={12} lg>
                            <InfluencerCard />
                        </Grid>
                        <Grid item xs={12} lg>
                        <InfluencerCard />
                        </Grid>
                        <Grid item xs={12} lg>
                        <InfluencerCard />
                        </Grid>

                    </Grid>
                    <Grid container spacing={6}  direction="row" justify="space-around" alignItems="center">
                        <Grid item xs={12} lg>
                            <InfluencerCard />
                        </Grid>
                        <Grid item xs={12} lg>
                        <InfluencerCard />
                        </Grid>
                        <Grid item xs={12} lg>
                        <InfluencerCard />
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>
            </Box>
        </div>
    )
}

export default Influencers

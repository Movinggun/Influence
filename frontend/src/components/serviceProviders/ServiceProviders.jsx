import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Navbar from '../layout/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FilterBar from './Filterbar'
import ServiceProvidersCard from './serviceProvidersCard'
import { loadInfluencers, setSearchTextBox, clearFilters } from '../../actions/influencerActions' 


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    menuPaper: {
        backgroundColor: "#181C24",
        color: '#BAC1D9',
        width: '200px;',
        padding: '0px'
      },
      menuItem: {
          fontSize: '12px',
          marginLeft: '35px'
      },
      menuItemTop: {
          fontSize: '12px',
          lineHeight:'2',
          paddingTop:'0px',
          paddingBottom: '0px'
      },
      menuItemIcon: {
          fontSize: '12px',
      }
  }));

const ServiceProviders = ({influencer, loadInfluencers, auth, clearFilters}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [sortDropdown, setsortDropdown] = useState({active : "Highest Rating"})

    const classes = useStyles();

    const handleProfileClose = (e) => {
        setAnchorEl(null);
        console.log(e.target.id)

        setsortDropdown({active: e.target.id !== '' ? e.target.id : 'Highest Rating' })

    };

    const handleProfileClick = (e) => {
        setAnchorEl(e.currentTarget);
    }


    useEffect(() => {
            loadInfluencers();
        // eslint-disable-next-line
    }, []);

    const {influencers, filteredInfluencers} = influencer;
    console.log(influencers);

    let filtered = filteredInfluencers == null ? influencers : filteredInfluencers;

    if (filtered !== null) {
        switch (sortDropdown.active) {
            case "Highest Rating":
                filtered.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
                break;
            case "Lowest Rating":
                filtered.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
                break;    
            case "Highest Level":
                filtered.sort((a, b) => parseFloat(b.level) - parseFloat(a.level));
                break;
            case "Lowest Level":
                filtered.sort((a, b) => parseFloat(a.level) - parseFloat(b.level));
                break;
            default:
                filtered.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
                break;   
        }
    
    }

    return (
        <div>
            <Navbar />
            <Box  style={{marginRight: '14%', marginLeft: '13%'}}>
            <Grid container spacing={4}>
                <Grid style={{height: '100%'}} item xs={3}>
                    <FilterBar />
                </Grid>
                <Grid item xs={9}>
                    <Menu classes={{ paper: classes.menuPaper }} id="simple-menu" anchorEl={anchorEl}  getContentAnchorEl={null} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} transformOrigin={{ vertical: "top", horizontal: "center" }}  keepMounted open={Boolean(anchorEl)} onClose={handleProfileClose}>
                            <MenuItem id="Highest Rating" classes={{ root: classes.menuItemIcon }}  onClick={handleProfileClose}>Highest Rating</MenuItem>
                            <MenuItem id="Lowest Rating" classes={{ root: classes.menuItemIcon }}  onClick={handleProfileClose}>Lowest Rating</MenuItem>
                            <MenuItem id="Highest Level" classes={{ root: classes.menuItemIcon }}  onClick={handleProfileClose}>Highest Level</MenuItem>
                            <MenuItem id="Lowest Level" classes={{ root: classes.menuItemIcon }}  onClick={handleProfileClose}>Lowest Level</MenuItem>
                    </Menu> 
                    <Box  onClick={handleProfileClick} style={{float: 'right', color: 'white', marginTop: '25px', cursor: 'pointer'}}>Sort by <strong> {sortDropdown.active} <img src="/images/down_arrow.svg" alt=""/></strong></Box>
                    <Box style={{color: 'white',  marginTop: '25px'}}>{ filtered !== null && filtered.length} Service Providers Available</Box>
                    <Box mb={1} style={{color: '#BAC1D9', fontSize: '12px',  marginTop: '3px', cursor: 'pointer'}} onClick={clearFilters}>Clear all filters</Box>
                    <Grid container spacing={4}  direction="row" justify="flex-start" alignItems="flex-start">
                        { filtered !== null && filtered.map(i => (
                            <Grid key={i._id} item xs={9} lg={4} xl={4}>
                                <ServiceProvidersCard displayName={i.user_info[0].display_name} level={i.level} verified={i.verified} description={i.card_description} rating={i.rating} price={i.starting_payment} socials={i.social_media} avatar={'/api/users/avatar/' + i.user} banner={'/api/influencers/banner/' + i.user}/>
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

export default connect(mapStateToProps, {loadInfluencers, setSearchTextBox, clearFilters}) (ServiceProviders)

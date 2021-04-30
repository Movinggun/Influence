import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadUser, setLoginModal, setSignupModal, logout} from '../../actions/authActions';
import { getTerms , setSearchText } from '../../actions/searchActions';
import { setDashboardSubPage } from '../../actions/dashboardActions'

import Box from '@material-ui/core/Box';
import LandingButton from "./LandingButton";
import LandingTextField from "./LandingTextField";
import LandingChip from "./LandingChip";
import LandingCard from "./LandingCard";
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import {useHistory} from 'react-router-dom';
import Login from '../login/Login'
import Signup from '../signup/Signup'
import './Landing.css'

export const useStyles = makeStyles((theme) => ({
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
        marginLeft: '10px'
    },
  }));
  

const Landing = ({ auth, loadUser, setLoginModal, setSignupModal, logout, getTerms, search,  setSearchText, setDashboardSubPage }) => {
    const history = useHistory();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const { searchText } = search;

    const onSearchChange = (e) => {
        console.log( searchText)
        setSearchText(e.target.value)   
    }

    const onChipClick = (term) => {
        setSearchText(searchText + " " + term)   
    }

    useEffect(() => {
        getTerms();
        if(localStorage.token) {
            loadUser();
        }
        // eslint-disable-next-line
    }, []);

    if (auth.isAuthenticated && auth.user === null) {
        loadUser();
        return <h1 style={{color: 'white'}}>Loading...</h1>
    }

    const handleProfileClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const doLogout = (e) => {
        setAnchorEl(null);
        logout();
    }

    const capitalizeFirstLetter = (str) => {
        return str.replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }


//history.push('/dashboard')
    return (
        <div style={{backgroundColor: '#13161D', height: '100%', backgroundSize: 'cover' }}>
              <Box className="Header">
                <Box display="flex" mt={2}>
                    <Box flexGrow={1}>
                        <img height="40" src="/images/Influence_Logo.png" alt="Influence Logo" />
                    </Box>
                    <Box mr={2}>
                        {auth.isAuthenticated ? <img onClick={handleProfileClick} style={{cursor:'pointer', borderRadius:'50%', width:'40px', height:'40px', marginRight:'10px', textAlign: 'center'}}  src={'/api/users/avatar/' + auth.user._id} alt=""/> : 
                        <Button style={{color: "white"}} onClick={setLoginModal}> {"Sign In"}</Button>
                         }
                
                   {auth.isAuthenticated && 
                   <Menu classes={{ paper: classes.menuPaper }} id="simple-menu" anchorEl={anchorEl}  getContentAnchorEl={null} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} transformOrigin={{ vertical: "top", horizontal: "center" }}  keepMounted open={Boolean(anchorEl)} onClose={handleProfileClose}>
                        <MenuItem classes={{ root: classes.menuItemTop }}   onClick={handleProfileClose}> <img style={{ borderRadius:'50%', width:'30px', height:'30px', marginRight:'10px'}}  src={'/api/users/avatar/' + auth.user._id} alt=""/><span style={{color: 'white'}}>{auth.user.display_name}</span> <br/></MenuItem>
                        <hr style={{marginLeft:15, marginRight:15, border: '0', height:'1px', background: '#2D3445'}}/>
                        <MenuItem classes={{ root: classes.menuItem }}   onClick={() => {setDashboardSubPage(1); history.push('/dashboard')}  }>Profile</MenuItem>
                        <MenuItem classes={{ root: classes.menuItem }}  onClick={handleProfileClose}>My account</MenuItem>
                        <MenuItem classes={{ root: classes.menuItemIcon }}  onClick={doLogout}> <img style={{marginRight: '10px'}} src="/images/logout.svg" alt=""/> Logout</MenuItem>
                    </Menu>}
                </Box>
                    <Login />
                    <Signup />
                   { !auth.isAuthenticated && <LandingButton label={"Join"} onClick={setSignupModal}/>}
                </Box>
                <Box mt={6}>
                    <Typography variant="h5" mt={2}><b>Your marketplace for influencers, <br /> brands, and service providers <br /> globally.</b></Typography>
                </Box>
                <Box mt={3}>
                    <LandingTextField onChange={onSearchChange} value={searchText}  label={"I'm looking for ..."}/>
                </Box>
                <Box mt={2}>
                    <Typography style={{fontSize: '15px', color: '#666E80'}}>Popular search queries:</Typography>
                    <Box style={{ display: 'flex'}}>
                        {search.terms !== null && !search.loading && search.terms.map(term => (<LandingChip onClick={()=> onChipClick(capitalizeFirstLetter(term.term))} key={term._id} name={capitalizeFirstLetter(term.term)}  label={capitalizeFirstLetter(term.term)}/>))}
                    </Box>
                </Box>
                <Box mt={3}>
                    <Typography>
                        <Link href="#"  style={{fontSize: '14px', color: '#BAC1D9',  textDecoration: 'underline'}}>
                            I want to provide a service or offer a brand deal
                        </Link>
                    </Typography>
                </Box>
            </Box>
            <Box mt={4} style={{ paddingLeft: '15%', paddingRight: '15%', color: 'white'}}>
                <Typography variant="h5" mt={2}><b>Trending Influencers</b></Typography> 
                <Box mt={2}>
                    <Grid container spacing={3}  direction="row" justify="space-around" alignItems="center">
                        <Grid item xs={12} lg>
                            <LandingCard title="Lirik" image="/images/lirik.png" verified={true} rating="4.8" level="5" type="Influencer" location="Watertown, MA" price="90"/>
                        </Grid>
                        <Grid item xs={12} lg>
                            <LandingCard title="DansGaming" image="/images/dansgaming.png" verified={true} rating="4.7" level="4" type="Influencer" location="Seattle, WA" price="90" />
                        </Grid>
                        <Grid item xs={12} lg>
                            <LandingCard title="DansGaming" image="/images/dansgaming.png" verified={true}  rating="4.7" level="4" type="Influencer" location="Seattle, WA" price="90"/>
                        </Grid>
                        <Grid item xs={12} lg>
                            <LandingCard title="DansGaming" image="/images/dansgaming.png" verified={true}  rating="4.7" level="4" type="Influencer" location="Seattle, WA" price="90"/>
                        </Grid>
                        <Grid item xs={12} lg>
                            <LandingCard title="DansGaming" image="/images/dansgaming.png" verified={true} rating="4.7" level="4" type="Influencer" location="Seattle, WA" price="90"/>
                        </Grid>
                    </Grid>
                    <Typography style={{marginTop: 8}} >
                        <Link href="#"  style={{fontSize: '14px', color: 'white'}}>
                        Browse More
                        </Link>
                     </Typography>
                </Box>
            </Box>
            <Box mt={4} style={{ paddingLeft: '15%', paddingRight: '15%', color: 'white'}}>
                <Typography variant="h5" mt={2}><b>Trending Service Providers</b></Typography>
                <Box mt={2} mb={3}>
                    <Grid container spacing={3}  direction="row" justify="space-around" alignItems="center">
                        <Grid item xs={12} lg>
                            <LandingCard title="Julia" image="/images/julia.png" verified={true}  rating="4.9" level="4" type="Emote Artist" location="Milano, Italy" price="90"/>
                        </Grid>
                        <Grid item xs={12} lg>
                            <LandingCard title="Lara Loft" image="/images/lara.png" verified={false} rating="4.4" level="3" type="Music Artist" price="90"/>
                        </Grid>
                        <Grid item xs={12} lg>
                            <LandingCard title="Lara Loft" image="/images/lara.png" verified={false} rating="4.4" level="3" type="Music Artist" price="90"/>
                        </Grid>
                        <Grid item xs={12} lg>
                            <LandingCard title="Lara Loft" image="/images/lara.png" verified={false} rating="4.4" level="3" type="Music Artist" price="90"/>
                        </Grid>
                        <Grid item xs={12} lg>
                            <LandingCard title="Lara Loft" image="/images/lara.png" verified={false} rating="4.4" level="3" type="Music Artist" price="90"/>
                        </Grid>
                    </Grid>
                    <Typography style={{marginTop: 8}} >
                        <Link href="#"  style={{fontSize: '14px', color: 'white'}}>
                        Browse More
                        </Link>
                    </Typography>
                </Box>
            <br />
            </Box>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    search: state.search 
});

export default connect(mapStateToProps, {loadUser, setLoginModal, logout, setSignupModal, getTerms, setSearchText, setDashboardSubPage})(Landing);

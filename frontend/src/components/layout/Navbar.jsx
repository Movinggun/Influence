import React, { useState } from 'react'
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { loadUser, setLoginModal, setSignupModal, logout} from '../../actions/authActions';

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
          marginLeft: '10px'
      }
  }));
  

const Navbar = ({auth, logout}) => {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();

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

    return (
        <div className={classes.root}>
        <AppBar style={{ backgroundColor: '#13151D', height: "60px", marginBottom: '10px'}} position="static">
          <Toolbar>
              <img style={{height: "30px", verticalAlign: 'middle', marginLeft:'12%',  marginRight:'1%', cursor: 'pointer'}}  onClick={() => history.push('/') } src="/images/influence_Logo.png" alt="logo"/>
              <Typography type="items" color="inherit" style={{ flex: 1 }}>
                <Button color="inherit" onClick={() => history.push('/dashboard') }>Dashboard</Button>
                <Button color="inherit" onClick={() => history.push('/influencers') } >Influencers</Button>
                <Button color="inherit">Service Providers</Button>
                <Button color="inherit">Conversations</Button>
            </Typography>
            <Box style={{marginRight: '12%'}}>
                {auth.user !== null && !auth.loading && <>
                 <img onClick={handleProfileClick} style={{cursor:'pointer', borderRadius:'50%', width:'40px', height:'40px', marginRight:'10px', textAlign: 'center', verticalAlign: 'middle'}} src={'/api/users/avatar/' + auth.user._id} alt=""/>
                 <Menu classes={{ paper: classes.menuPaper }} id="simple-menu" anchorEl={anchorEl}  getContentAnchorEl={null} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} transformOrigin={{ vertical: "top", horizontal: "center" }}  keepMounted open={Boolean(anchorEl)} onClose={handleProfileClose}>
                        <MenuItem classes={{ root: classes.menuItemTop }}   onClick={handleProfileClose}> <img style={{ borderRadius:'50%', width:'30px', height:'30px', marginRight:'10px'}} src={'/api/users/avatar/' + auth.user._id} alt=""/><span style={{color: 'white'}}>{auth.user.display_name}</span> <br/></MenuItem>
                        <hr style={{marginLeft:15, marginRight:15, border: '0', height:'1px', background: '#2D3445'}}/>
                        <MenuItem classes={{ root: classes.menuItem }}   onClick={() => history.push('/dashboard') }>Profile</MenuItem>
                        <MenuItem classes={{ root: classes.menuItem }}  onClick={handleProfileClose}>My account</MenuItem>
                        <MenuItem classes={{ root: classes.menuItemIcon }}  onClick={doLogout}> <img style={{marginRight: '10px'}} src="/images/logout.svg" alt=""/> Logout</MenuItem>
                </Menu> </>}
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
});


export default connect(mapStateToProps, {logout}) (Navbar)

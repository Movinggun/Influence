import React, { useState, useEffect } from 'react'
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
import { loadUser, setNotificationStatus, deleteNotification, logout} from '../../actions/authActions';
import { setDashboardSubPage } from '../../actions/dashboardActions'
import { setSocket, setEventsRegistered } from '../../actions/socketActions'


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
      menuPaper2: {
        backgroundColor: "#181C24",
        color: '#BAC1D9',
        width: '300px;',
        paddingBottom: '5px',
        paddingTop: '5px',
        whiteSpace: 'normal'
      },  
      menuItem: {
          fontSize: '12px',
          marginLeft: '35px'
      },
      menuItemTop: {
          fontSize: '12px',
          lineHeight:'1',
          paddingTop:'5px',
          paddingBottom: '0px',
          paddingLeft: '25px',
          overflowWrap: 'break-word'
      },
      menuItemIcon: {
          fontSize: '12px',
          marginLeft: '10px'
      }
  }));
  

const Navbar = ({auth, logout, setDashboardSubPage, socket, setSocket, setNotificationStatus, loadUser, setEventsRegistered, deleteNotification}) => {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorNotifs, setAnchorNotifs] = useState(null);
    const classes = useStyles();


 
    useEffect(() => {
      if (socket.socket !== null) {
        socket.socket.on('connect_error', () => {
          socket.socket.disconnect();
          socket.socket.close();
          setSocket(null);
        })
  
        socket.socket.on("notifUpdate", data =>{
          loadUser();
        });
  
      }
     /* socket.socket.emit("authEvent", auth.token)
            socket.socket.on("authReturnEvent", data =>{
                console.log("We get here")
            if (data){
                console.log("We get here2")
                socket.socket.on("notifUpdate", data =>{
                    loadUser();
                });
                try {
                    socket.socket.on('connect_error', () => {
                        socket.socket.disconnect();
                        setSocket(null);
                        setEventsRegistered(false)
                    })
        
        
                } catch (err) {
                    console.log("An error occured with the socket: " + err)
                }
                    setEventsRegistered(true)
            } else{
                console.log("Failed to auth D:")
                return <h1> Socket IO Failed </h1>
            }
            })*/
    }, [socket]);    


    const handleProfileClose = () => {
        setAnchorEl(null);
        setAnchorNotifs(null);
    };

    const handleProfileClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleNotifsClick = (e) => {
      setAnchorNotifs(e.currentTarget);
    };

    const handleNotifActionU = (e, notification) => {
        console.log(e.currentTarget.id)
        notification.notification.read = true;
        setNotificationStatus(notification.notification) 
        //loadUser()
    }

    const handleNotifActionR = (e) => {
      deleteNotification(e.currentTarget.id)
  }

    const doLogout = (e) => {
        setAnchorEl(null);
        setSocket(null);
        logout();
        setEventsRegistered(false)
    };

    let notificationsArray = auth.user.notifications;

    let readNotifications = notificationsArray.filter(m => (m.read));
    let unReadNotifications = notificationsArray.filter(m => (!m.read));

    return (
        <div className={classes.root}>
        <AppBar style={{ backgroundColor: '#13151D', height: "60px", marginBottom: '10px'}} position="static">
          <Toolbar>
              <img style={{height: "30px", verticalAlign: 'middle', marginLeft:'12%',  marginRight:'1%', cursor: 'pointer'}}  onClick={() => history.push('/') } src="/images/influence_Logo.png" alt="logo"/>
              <Typography type="items" color="inherit" style={{ flex: 1 }}>
                <Button color="inherit" onClick={() => history.push('/dashboard') }>Dashboard</Button>
                <Button color="inherit" onClick={() => history.push('/influencers') } >Influencers</Button>
                <Button color="inherit" onClick={() => history.push('/service-providers')}>Service Providers</Button>
                <Button color="inherit" onClick={() => history.push('/chat') }>Conversations</Button>
            </Typography>
            <Box style={{marginRight: '12%'}}>
                {auth.user !== null && !auth.loading && <>
                
                  <img onClick={handleNotifsClick} style={{cursor:'pointer', width:'26px', height:'26px', marginRight:'20px', textAlign: 'center', verticalAlign: 'middle'}} src={unReadNotifications.length > 0 ? '/icons/icon-notif-new.svg' : '/icons/icon-notif.svg'} alt=""/>

                  <Menu classes={{ paper: classes.menuPaper2 }} id="notifs-menu" anchorEl={anchorNotifs}  getContentAnchorEl={null} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} transformOrigin={{ vertical: "top", horizontal: "center" }}  keepMounted open={Boolean(anchorNotifs)} onClose={handleProfileClose}>
                
                      <Box style={{marginLeft:'25px', color: 'white', fontSize: '18px', marginRight:'25px', marginTop: '10px' ,lineHeight: '0.5'}}><strong>Unread Notifications</strong></Box>
                      <hr style={{marginLeft:'25px', marginRight: '25px', border: '0', height:'1px', background: '#2D3445'}}/>
                      {unReadNotifications.length !== 0 ? unReadNotifications.map( notification => (
                             <MenuItem  id={notification._id }  key={notification._id} classes={{ root: classes.menuItemTop }} style={{whiteSpace: 'normal'}}   onClick={(e) => handleNotifActionU(e, {notification})}>
                                <Box style={{position: 'relative', width: '100%', paddingBottom: '5px'}}>
                                  <Box style={{color: '#A9FCD5', fontSize: '15px'}}>{notification.title}</Box> 
                                  <Box style={{marginTop: '5px', width: '100%', lineHeight: '1.2'}}>{notification.message}</Box>
                                </Box>
                              </MenuItem>

                      )) : <Box style={{marginLeft: '25px', marginRight: '25px', marginBottom: '15px', fontSize: '12px'}}>You don't have any unread notifications.</Box>}

                      <Box style={{marginLeft:'25px', color: 'white', fontSize: '18px', marginRight:'25px', marginTop: '10px' ,lineHeight: '0.5'}}><strong>Read Notifications</strong></Box>
                      <hr style={{marginLeft:'25px', marginRight: '25px', border: '0', height:'1px', background: '#2D3445'}}/>
                      {readNotifications.length !== 0 ? readNotifications.map( notification => (
                             <MenuItem id={notification._id}  key={notification._id} classes={{ root: classes.menuItemTop }} style={{whiteSpace: 'normal'}}   onClick={handleNotifActionR}>
                                <Box style={{position: 'relative', width: '100%', paddingBottom: '5px'}}>
                                  <Box style={{color: '#A9FCD5', fontSize: '15px'}}>{notification.title}</Box> 
                                  <Box style={{marginTop: '5px', width: '100%', lineHeight: '1.2'}}>{notification.message}</Box>
                                </Box>
                              </MenuItem>
                      )): <Box style={{marginLeft: '25px', marginRight: '25px', fontSize: '12px'}}>You don't have any read notifications.</Box>}
                </Menu>
                 <img onClick={handleProfileClick} style={{cursor:'pointer', borderRadius:'50%', width:'40px', height:'40px', marginRight:'10px', textAlign: 'center', verticalAlign: 'middle'}} src={'/api/users/avatar/' + auth.user._id} alt=""/>
                 <Menu classes={{ paper: classes.menuPaper }} id="simple-menu" anchorEl={anchorEl}  getContentAnchorEl={null} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} transformOrigin={{ vertical: "top", horizontal: "center" }}  keepMounted open={Boolean(anchorEl)} onClose={handleProfileClose}>
                        <MenuItem classes={{ root: classes.menuItemTop }}   onClick={handleProfileClose}> <img style={{ borderRadius:'50%', width:'30px', height:'30px', marginRight:'10px'}} src={'/api/users/avatar/' + auth.user._id} alt=""/><span style={{color: 'white'}}>{auth.user.display_name}</span> <br/></MenuItem>
                        <hr style={{marginLeft:15, marginRight:15, border: '0', height:'1px', background: '#2D3445'}}/>
                        <MenuItem classes={{ root: classes.menuItem }}   onClick={() => {setDashboardSubPage(1); history.push('/dashboard')} }>Profile</MenuItem>
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
    auth: state.auth,
    socket: state.socket
});


export default connect(mapStateToProps, {logout, setDashboardSubPage, setSocket, setNotificationStatus, loadUser, setEventsRegistered, deleteNotification}) (Navbar)

import React, { useEffect } from 'react'
import Navbar from '../layout/Navbar'
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Profile from './Profile'
import Certificates from './Certificates'
import { setDashboardSubPage } from '../../actions/dashboardActions'
import socketIOClient from "socket.io-client";
import { setSocket, setEventsRegistered } from '../../actions/socketActions'; 
import { loadUser } from '../../actions/authActions';
const Dashboard = ({ auth, dashboard ,setDashboardSubPage, socket, setSocket, setEventsRegistered , loadUser}) => {
    useEffect(() => {

       /* if (socket.socket != null) {
            console.log("Killing Existing Socket")
            socket.socket.close();
            socket.socket.disconnect();
        }

        const newSocket = socketIOClient('/', { query: { id: auth.user._id } });
        setSocket(newSocket);  
        return () => newSocket.close()
*/

        /* setSocket(newSocket);  
        socket.socket.emit("authEvent", auth.token)
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
    // eslint-disable-next-line
    }, [auth.user]);

    const handleChange = (event, newValue) => {
        setDashboardSubPage(newValue);
    };

    let welcomeMessage = '';

    const getWelcomeMessage = () => {
        let today = new Date();
        let currentHour = today.getHours();

        if (currentHour < 12) welcomeMessage = 'Good Morning,';
        else if (currentHour < 18) welcomeMessage = 'Good Afternoon,';
        else welcomeMessage = 'Good Evening,';

    };

    getWelcomeMessage()

    if (socket.socket !== null) {
        try {
            socket.socket.on('connect_error', () => {
                console.log("Lost Connection to the server")
                socket.socket.disconnect();
                setSocket(null);
            })


        } catch (err) {
            console.log("An error occured with the socket: " + err)
        }
    }


    return (
        <div style={{backgroundColor: '#202530', height: '100vh', backgroundSize: 'cover' }}>
            <Navbar />
            <Box style={{width: '100%', height: '200px', background: 'linear-gradient(45deg, #434C60 , #2B3242)', marginTop:"-10px", position:"relative"}}>
                <Box style={{marginLeft: '13%', marginRight: '13%', paddingTop: '25px', color: 'white'}}>
                    <Box style={{ float: "left" }}> 
                        <img  style={{borderRadius:'50%', width:'96px', height:'96px', marginRight:'10px', textAlign: 'center', verticalAlign: 'middle'}} src={'/api/users/avatar/' + auth.user._id} alt=""/>
                        <Typography style={{float: "right", fontSize: '18px', lineHeight: '1.0'}}>
                             <Box style={{color: '#BAC1D9', fontSize:'16px', marginTop:'11px'}}>{welcomeMessage}</Box>
                             <Box style={{fontSize:'30px' , marginTop:'5px'}}>  <b>{auth.user.display_name}</b></Box>
                             <Box style={{color: '#F9E7AA', fontSize: '16px', lineHeight: '1.0', marginTop:'5px'}}> Level {auth.user.account_type_info[0].level} {
                             auth.user.account_type == 'influencer' && "Influencer" || 
                             auth.user.account_type == 'brand' && "Brand" ||
                             auth.user.account_type == 'service_provider' && "Service Provider" ||
                             auth.user.account_type == 'none' && "Guest"
                              }</Box>
                         </Typography>

                    </Box>
                    <Box style={{position: 'absolute', bottom:0}}>
                        <Tabs value={dashboard.currentSubPage} onChange={handleChange} TabIndicatorProps={{style: {background:'#A9FCD5'}}}  >
                            <Tab  style={{minWidth: 100, width: 100, fontWeight: 'normal'}}  label="Overview" />
                            <Tab  style={{minWidth: 100, width: 100, fontWeight: 'normal'}}  label="Edit Profile" />
                            <Tab  style={{minWidth: 100, width: 100, fontWeight: 'normal'}}  label="Certificates" />
                        </Tabs>   
                    </Box>
                </Box> 
            </Box>
            <Box mr={30} ml={30} style={{color: 'white'}}>
                {dashboard.currentSubPage === 0 && <> 
                  <h1>Overview</h1>
                </>
                }
                {dashboard.currentSubPage === 1 && <> 
                    <Profile />
                </>
                }
                {dashboard.currentSubPage === 2 && <>        
                    <Certificates />
                </>
                }
            </Box>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    dashboard: state.dashboard,
    socket: state.socket
});


export default connect(mapStateToProps, {setDashboardSubPage, setSocket, setEventsRegistered, loadUser}) (Dashboard)

import React from 'react'
import Navbar from '../layout/Navbar';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import {Typography} from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

import ChatUserSelect from './ChatUserSelect';

import './chat-bubbles.css'

export const useStyles = makeStyles((theme) => ({
    icon: {
        "& .MuiAlert-icon": {
            color: '#8A6C28'
          }
    }
  }));
  


const Chat = () => {
    const classes = useStyles();

    return (
        <div style={{height: '100vh', backgroundColor: '#2D3445'}}>
            <Navbar />
            <Box style={{marginRight: '14%', marginLeft: '14%'}}>
                <Card style={{backgroundColor: '#333B4D', height: 'calc(100vh - 180px)', marginTop: '60px',  display: 'flex', flexWrap: 'wrap'}}>
                    <Box style={{width: '300px', height: '100%', minHeight: '100px', backgroundColor: '#202530'}}>
                        <Box style={{padding: '15px'}}>
                            <Typography style={{color: '#FFFFFF', fontSize: '26px'}}> <strong>Conversations</strong></Typography>
                            <Input  placeholder="Search" style={{width: '100%', height:'35px', margin: 0, marginTop: '10px' ,backgroundColor: '#181C24', color: '#BAC1D9', borderRadius: 5}} startAdornment={ <InputAdornment position="start"> <Box m={1}> <img src="/icons/icon-search.svg" alt="Novo Search Icon"/> </Box> </InputAdornment>}/>
                        </Box>
                        <Box style={{ overflowY: 'auto', height: 'calc(100vh - 290px)'}}>
                            <ChatUserSelect  selected={true}/>
                            <ChatUserSelect  selected={false}/>
                            <ChatUserSelect  selected={false}/>
                            <ChatUserSelect  selected={false}/>
                            <ChatUserSelect  selected={false}/>
                            <ChatUserSelect  selected={false}/>
                            <ChatUserSelect  selected={false}/>
                            <ChatUserSelect  selected={false}/>
                            <ChatUserSelect  selected={false}/>
                            <ChatUserSelect  selected={false}/>
                            <ChatUserSelect  selected={false}/>
                            <ChatUserSelect  selected={false}/>
                            
                        </Box>
                    </Box>
                    <Box style={{width: 'calc(100% - 400px)', height: '100%',  flex: 1}}>
                        <Box style={{ height: '64px',backgroundColor: '#202530'}}>
                            <Box style={{ float: "right"}}>
                            <img  style={{paddingTop: '18px', paddingLeft: '4px', paddingRight: '30px', width:'7px', cursor: 'pointer'}} src="/icons/icon-context-menu-vertical.svg" alt=""/>
                            </Box>
                            <Box style={{float: 'left'}}>
                            <img  style={{borderRadius:'50%', width:'40px', height:'40px', marginTop: '14px', marginLeft:'10px', objectFit: 'cover',  marginRight:'10px', textAlign: 'center'}} src="images/juilia.svg" alt=""/>
                            <Typography style={{float: "right", lineHeight: '1.2', paddingTop: '14px'}}>Julia Cassian <br />  
                                 <span style={{color: '#BAC1D9', fontSize: '13px'}}> Level 4 Service Provider</span></Typography>
                            </Box>
                        </Box>
                        <Box style={{width: '100%', height: 'calc(100% - 120px)',backgroundColor: '#333B4D', overflowY: 'auto'}}>
                            <Box style={{padding: '15px', height: '110%'}}>
                                <Alert  className={classes.icon}   style={{  backgroundColor: '#F8E1A3', color: '#202530', marginTop: '10px', marginBottom: '20px'}} severity='info' color='warning'>
                                    <AlertTitle style={{  color: '#8A6C28'}} >Information</AlertTitle>
                                    Messages in this chatroom are encrypted. Please never send passwords or sensitive information to someone else.
                                </Alert>
                                <div className="separator">November 27, 2019</div>
                                <Box style={{marginTop: '10px'}}>
                                    <Box style={{ clear: 'both'}}>
                                        <Box style={{float: 'right', fontSize: '14px', color: '#BAC1D9', paddingRight: '4px'}}>02:43AM</Box>
                                        <Box className="speech-bubble" style={{clear: 'both',float: 'right',padding: '10px', marginRight: '10px', paddingRight: '5px', color: '#13151D', maxWidth:'550px', marginTop: '5px', marginBottom: '10px'}}>
                                            Hi Julia, are you free? I need some Christmas emotes for next weeks special stream. I'll propose the usual terms.  
                                        </Box>
                                    </Box>
                                    <Box style={{ clear: 'both'}}>
                                        <Box style={{float: 'left', fontSize: '14px', color: '#BAC1D9 ', paddingLeft: '4px'}}>02:48AM</Box>
                                        <Box className="speech-bubble-other" style={{clear: 'both',float: 'left',padding: '10px', marginLeft: '10px', paddingLeft: '10px', color: 'white', maxWidth:'550px', marginTop: '5px'}}>
                                           Yes I am what do you have in mind?
                                        </Box>
                                    </Box>
                                    <Box style={{ clear: 'both'}}>
                                        <Box style={{float: 'right', fontSize: '14px', color: '#BAC1D9', paddingRight: '4px'}}>02:49AM</Box>
                                        <Box className="speech-bubble" style={{clear: 'both',float: 'right',padding: '10px', marginRight: '10px', paddingRight: '10px', color: '#13151D', maxWidth:'550px', marginTop: '5px', marginBottom: '10px'}}>
                                            I need one with santa hats!
                                        </Box>
                                    </Box>
                                    <Box style={{ clear: 'both'}}>
                                        <Box style={{float: 'left', fontSize: '14px', color: '#BAC1D9 ', paddingLeft: '4px'}}>03:20AM</Box>
                                        <Box className="speech-bubble-other" style={{clear: 'both',float: 'left',padding: '10px', marginLeft: '10px', paddingLeft: '10px', color: 'white', maxWidth:'550px', marginTop: '5px'}}>
                                           Got it!
                                        </Box>
                                    </Box>
                                    <Box style={{ clear: 'both'}}>
                                        <Box style={{float: 'right', fontSize: '14px', color: '#BAC1D9', paddingRight: '4px'}}>03:40AM</Box>
                                        <Box className="speech-bubble" style={{clear: 'both',float: 'right',padding: '10px', marginRight: '10px', paddingRight: '10px', color: '#13151D', maxWidth:'550px', marginTop: '5px', marginBottom: '10px'}}>
                                            Thank you so much!
                                        </Box>
                                    </Box>
                                    <Box style={{ clear: 'both'}}>
                                        <Box style={{float: 'left', fontSize: '14px', color: '#BAC1D9 ', paddingLeft: '4px'}}>06:30AM</Box>
                                        <Box className="speech-bubble-other" style={{clear: 'both',float: 'left',padding: '10px', marginLeft: '10px', paddingLeft: '10px', paddingRight: '10px', color: 'white', maxWidth:'550px', marginTop: '5px'}}>
                                           Alright Dan we are about 50% through!
                                        </Box>
                                    </Box>
                                    <Box style={{ clear: 'both'}}>
                                        <Box style={{float: 'right', fontSize: '14px', color: '#BAC1D9', paddingRight: '4px'}}>08:59AM</Box>
                                        <Box className="speech-bubble" style={{clear: 'both',float: 'right',padding: '10px', marginRight: '10px', paddingRight: '10px', color: '#13151D', maxWidth:'550px', marginTop: '5px', marginBottom: '10px'}}>
                                            Sweet!
                                        </Box>
                                    </Box>
                                    <Box style={{ clear: 'both'}}>
                                        <Box style={{float: 'left', fontSize: '14px', color: '#BAC1D9 ', paddingLeft: '4px'}}>3:20PM</Box>
                                        <Box className="speech-bubble-other" style={{clear: 'both',float: 'left',padding: '10px', marginLeft: '10px', paddingLeft: '10px', paddingRight: '10px', color: 'white', maxWidth:'550px', marginTop: '5px'}}>
                                           We are done :) Enjoy
                                        </Box>
                                    </Box>
                                </Box>
    

                            </Box>
                        </Box>
                        <Box style={{width: '100%',backgroundColor: '#181C24', display: 'flex', paddingTop:'1px'}}> 
                            <Box style={{marginLeft: '15px', marginTop:'10px', marginBottom: '18px', backgroundColor: '#282F3D', borderRadius: '50%', padding: '5px'}}>
                                <img  style={{paddingTop: '4px', paddingLeft: '2px', paddingRight: '2px', height:'18px', cursor: 'pointer'}} src="/icons/icon-propose.svg" alt=""/>
                            </Box>
                            <Box style={{paddingLeft: '15px', paddingRight: '8px', flex: 1}}>
                                <Input  placeholder="Message Julia..." style={{width: '100%', height:'35px', margin: 0, marginTop: '10px' ,backgroundColor: '#282F3D', color: 'dwhite', borderRadius: '5000px', paddingLeft: '20px'}}/>
                            </Box>
                            <Box style={{paddingRight: '15px'}}>
                                <Box style={{marginLeft: '10px', marginTop:'10px', marginBottom: '18px', backgroundColor: '#282F3D', borderRadius: '50%', padding: '5px'}}>
                                    <img  style={{paddingTop: '4px', paddingLeft: '4px', paddingRight: '4px', width:'18px', cursor: 'pointer'}} src="/icons/icon-send-message.svg" alt=""/>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </div>
    )
}

export default Chat

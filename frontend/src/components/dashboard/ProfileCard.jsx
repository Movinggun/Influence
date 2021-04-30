import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Typography} from "@material-ui/core";
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';

const ProfileCard = ({ auth }) => {
    

    return (
        <Card style={{backgroundColor: '#13151D', height: '50%', marginTop: '25px', marginRight: '10px'}}>
            <CardContent>
                <Box mt={2} style={{textAlign: 'center'}}>
                    <img  style={{borderRadius:'50%', width:'128px', height:'128px'}} src={'/api/users/avatar/' + auth.user._id} alt=""/>
                    <Typography style={{color: '#FFFFFF', fontSize:'20px', lineHeight: '1.0', marginTop: '5px', marginBottom: '15px'}}>
                        <b>{auth.user.display_name}</b>
                        {auth.user.account_type_info[0].verified && <img style={{width: 14, paddingLeft: 5}} src="/icons/icon-verified.svg" alt="Verified User"/>}
                        <Box>
                            <span style={{color: '#F9E7AA', fontSize: '13px', lineHeight: '0.2'}}>Level {auth.user.account_type_info[0].level} Influencer</span>
                        </Box>
                    </Typography>
                    <hr style={{ border: '0', height:'1px', background: '#2D3445'}}/>
                </Box>
                <Box  style={{position: 'relative'}}>
                    <Box style={{marginBottom: '30px'}}>
                        <Typography style={{color: '#FFFFFF', fontSize:'18px', marginTop: '5px'}}>
                            <Box style={{width: '100%'}}>
                                <Box style={{ float: 'left' }}><strong >About</strong></Box>
                                <Box style={{ float: 'right', fontSize: '13px', cursor: 'pointer', color: '#A9FCD5', lineHeight: '2.0'}}><u>Edit</u></Box>
                            </Box>
                            <Box style={{width: '100%', clear: 'both'}}>
                                <Box style={{ float: 'left', fontSize: '14px', color: '#666E80' }}>First Name</Box>
                                <Box style={{ float: 'right', fontSize: '14px', color: 'white'}}>{auth.user.first_name}</Box>
                            </Box> 
                            <Box style={{width: '100%', clear: 'both'}}>
                                <Box style={{ float: 'left', fontSize: '14px', color: '#666E80' }}>Last Name</Box>
                                <Box style={{ float: 'right', fontSize: '14px', color: 'white'}}>{auth.user.last_name}</Box>
                            </Box>
                            <Box style={{width: '100%', clear: 'both'}}>
                                <Box style={{ float: 'left', fontSize: '14px', color: '#666E80' }}>Display Name</Box>
                                <Box style={{ float: 'right', fontSize: '14px', color: 'white'}}>{auth.user.display_name}</Box>
                            </Box>
                            <Box style={{width: '100%', clear: 'both'}}>
                                <Box style={{ float: 'left', fontSize: '14px', color: '#666E80' }}>Email</Box>
                                <Box style={{ float: 'right', fontSize: '14px', color: 'white'}}>{auth.user.email}</Box>
                            </Box>  
                            <Box style={{width: '100%', clear: 'both'}}>
                                <Box style={{ float: 'left', fontSize: '14px', color: '#666E80' }}>Date Of Birth</Box>
                                <Box style={{ float: 'right', fontSize: '14px', color: 'white'}}>{new Date(auth.user.dob).toLocaleDateString("en-GB")}</Box>
                            </Box> 
                            <Box style={{width: '100%', clear: 'both'}}>
                                <Box style={{ float: 'left', fontSize: '14px', color: '#666E80' }}>Account Creation</Box>
                                <Box style={{ float: 'right', fontSize: '14px', color: 'white'}}>{new Date(auth.user.date).toLocaleDateString("en-GB")}</Box>
                            </Box>   
                        </Typography> 
                        
                    </Box>
                    <hr style={{ border: '0', height:'1px', background: '#2D3445'}}/>
                    <Box style={{marginBottom: '20px'}}>
                        <Typography style={{color: '#FFFFFF', fontSize:'18px', marginTop: '5px'}}>
                            <Box style={{width: '100%', clear: 'both'}}>
                                <Box style={{ float: 'left' }}><strong >{
                             auth.user.account_type == 'influencer' && "Influencer" || 
                             auth.user.account_type == 'brand' && "Brand" ||
                             auth.user.account_type == 'service_provider' && "Service Provider" ||
                             auth.user.account_type == 'none' && "Guest"
                              } Information</strong></Box>
                                <Box style={{ float: 'right', fontSize: '13px', cursor: 'pointer', color: '#A9FCD5', lineHeight: '2.0'}}><u>Edit</u></Box>
                            </Box>
                            <Box style={{width: '100%', clear: 'both'}}>
                                <Box style={{ float: 'left', fontSize: '14px', color: '#666E80' }}>Level</Box>
                                <Box style={{ float: 'right', fontSize: '14px', color: 'white'}}>{auth.user.account_type_info[0].level}</Box>
                            </Box> 
                            <Box style={{width: '100%', clear: 'both'}}>
                                <Box style={{ float: 'left', fontSize: '14px', color: '#666E80' }}>Rating</Box>
                                <Box style={{ float: 'right', fontSize: '14px', color: 'white'}}>{auth.user.account_type_info[0].rating} </Box>
                            </Box>
                            <Box style={{width: '100%', clear: 'both'}}>
                                <Box style={{ float: 'left', fontSize: '14px', color: '#666E80' }}>Verified</Box>
                                <Box style={{ float: 'right', fontSize: '14px', color: 'white'}}> {auth.user.account_type_info[0].verified ? <img style={{width: 12, paddingLeft: 5} } src="/icons/icon-verified.svg" alt="Verified User"/> : 'No'}</Box>
                            </Box>
                        </Typography> 
                        
                    </Box>
                </Box>
 
            </CardContent>  
        </Card>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
});


export default connect(mapStateToProps) (ProfileCard)

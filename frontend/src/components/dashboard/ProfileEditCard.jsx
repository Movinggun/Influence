import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Typography} from "@material-ui/core";
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';

const ProfileEditCard = ({ auth }) => {
    

    return (
        <>
            <Box style={{marginTop: '25px'}}><strong style={{fontSize: '26px'}}>Edit Profile</strong></Box>

            <Card style={{backgroundColor: '#13151D', marginTop: '15px', marginRight: '10px'}}>
                <CardContent style={{ paddingBottom: '18px'}}>
                    <strong>You are currently not editing anything in your profile.</strong>
                </CardContent>  
            </Card>
        </>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
});


export default connect(mapStateToProps) (ProfileEditCard)

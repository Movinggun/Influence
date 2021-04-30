import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import {Typography} from "@material-ui/core";
import { connect } from 'react-redux';

const CertificateCard = ({ auth }) => {
    return (
        <Card style={{backgroundColor: '#13151D', height: '100%'}}>
            <CardMedia component="img" alt="Influencer Image" height="169" image='/images/verified.png' title=""/>
            <CardContent style={{paddingBottom: '10px', position: 'relative'}}>
            <Typography style={{fontSize: '14px', marginBottom: '20px'}}>This certificate is rewarded to users who are verified with Influence. </Typography> 
            <Typography style={{fontSize: '14px', position: 'absolute', bottom:0, right: 0, paddingRight: '15px', paddingBottom:'5px'}}>Awarded Date: {new Date(auth.user.date).toLocaleDateString("en-GB")} </Typography> 
            </CardContent>
        </Card>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps) (CertificateCard)

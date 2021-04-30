import React from 'react'
import Grid from '@material-ui/core/Grid';
import CertificateCard from './CertificateCard'
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Certificates = ({ auth }) => {
    return (
        <Grid  style={{marginTop: '5px'}} container spacing={6}  direction="row" justify="flex-start" alignItems="flex-start">
           {!auth.user.account_type_info[0].verified && <Card style={{backgroundColor: '#13151D', marginTop: '15px', marginRight: '10px', width: '100%'}}>
            <CardContent style={{ paddingBottom: '18px'}}>
                    <strong>You do not have any certificates. Try some of Influences training courses to gain more certifications.</strong>
            </CardContent>  
            </Card> } 
            <Grid item xs={9} lg={3} xl={3} >
                {auth.user.account_type_info[0].verified && <CertificateCard /> }
            </Grid>

        </Grid>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
});


export default connect(mapStateToProps) (Certificates)

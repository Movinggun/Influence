import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import {Box} from "@material-ui/core";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AlertCustom from '../layout/Alerts';
import LandingButton from "../landing/LandingButton";
import RadioSelector from './RadioSelector';
import { setBranchModal, logout, loadUser, saveBranch } from '../../actions/authActions';
import { setAlert } from '../../actions/alertActions';
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    icon: {
        "& .MuiAlert-icon": {
            color: '#8A6C28'
          }
    }
  }));
  


const BranchModal = ( {auth, setBranchModal, logout, saveBranch} ) =>{
  const classes = useStyles();
  const history = useHistory();
 

  useEffect(() => {

    if (auth.isAuthenticated && !auth.loading && auth.user !== null) {
        if (auth.user.account_type === 'none') {
            console.log("lo")
            setBranchModal(true);
        }
    }

    // eslint-disable-next-line
}, [auth.user, auth.isAuthenticated])



  const onSignOut = () => {
    setBranchModal(false);
    logout()
  }

  const onLoginSubmit = () => {
    console.log(auth.selectedAccountBranch);
    saveBranch({account_type: auth.selectedAccountBranch})
  }


  return (
    <div>
      <Dialog open={auth.branchModalState} aria-labelledby="form-dialog-title" fullWidth={true} maxWidth='sm' >
        <DialogTitle style={{ backgroundColor: '#202530', color: 'white', paddingBottom:'5px'}} id="form-dialog-title"><b>Select a Branch</b></DialogTitle>
        <DialogContent style={{ backgroundColor: '#202530', color: '#BAC1D9', paddingTop:'0px' }} >
        In order to use your dashboard and send messages to other users, you need to select a branch.
          <br />
          <Alert  className={classes.icon}   style={{  backgroundColor: '#F8E1A3', color: '#202530', marginTop: '20px', marginBottom: '20px'}} severity='info' color='warning'>
                    <AlertTitle style={{  color: '#8A6C28'}} >Information</AlertTitle>
                    Accounts may only access a single branch. This choice can't be reverted once set.
                </Alert>
            <RadioSelector />
        </DialogContent>
        <DialogActions style={{ backgroundColor: '#202530', paddingRight: '5%', paddingBottom: 15,}}>
          <Button style={{color: "white"}} onClick={onSignOut}>Sign Out</Button>
          <LandingButton label={"Continue"} onClick={onLoginSubmit}/>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {setBranchModal, logout, saveBranch, setAlert})(BranchModal)

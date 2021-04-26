import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AlertCustom from '../layout/Alerts';
import LandingButton from "../landing/LandingButton";
import { setLoginModal, login, loadUser, clearErrors } from '../../actions/authActions';
import { setAlert } from '../../actions/alertActions';
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom';

const Login = ( {auth, setLoginModal, login, setAlert, clearErrors} ) =>{
  const history = useHistory();
  const [user, setUser] = useState({email: '', password: ''});
  const { email, password} = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value})


  useEffect(() => {
    if (auth.error === 'Invalid Username or Password') {
        setAlert('Invalid Username Or Password', 'Error', "error");
        clearErrors();
    } else if (auth.isAuthenticated) {
        if (auth.setLoginModal) {
            console.log("hi");
            setAlert('You have logged in!', 'Success', "success", 1500)
            setLoginModal();
            history.push('/dashboard')
        }
    }
    // eslint-disable-next-line
}, [auth.error, auth.isAuthenticated])


  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const onLoginSubmit = () => {

    console.log("email: " + email)
    if (email === '' || password === '') {
        setAlert('Please ensure all fields are not empty!', 'Error', "error");
        clearErrors();
    } else if(!validateEmail(email)) {
        setAlert('Invalid email entered!', 'Error', "error");
        clearErrors();
    } else {
        login({email, password})
    }
  }


  return (
    <div>
      <Dialog open={auth.setLoginModal} onClose={setLoginModal} aria-labelledby="form-dialog-title" fullWidth={true} maxWidth='sm' >
        <DialogTitle style={{ backgroundColor: '#202530', color: 'white', }} id="form-dialog-title"><b>Login to Influence</b></DialogTitle>
        <DialogContent style={{ backgroundColor: '#202530', color: '#BAC1D9' }} >
        <AlertCustom />
          <span style={{marginLeft: 2, fontSize: '14px'}}> Email: </span> <br />
          <Input name="email" placeholder="Username" value={email} onChange={onChange} style={{width: '100%' , margin: 0, marginBottom: 20, marginTop: 5, paddingLeft: 10, paddingTop: 4, paddingBottom: 4, backgroundColor: '#181C24', borderRadius: 3, color: '#BAC1D9',  border: '1px solid #666E80'}}/>
            <br /> <span style={{marginLeft: 2, fontSize: '14px'}}> Password: </span> <br />
          <Input name="password" placeholder="Password" value={password} onChange={onChange} type="password" style={{width: '100%' , margin: 0, paddingLeft: 10, paddingTop: 4, paddingBottom: 4, marginTop: 5, backgroundColor: '#181C24', color: '#BAC1D9', borderRadius: 3,  border: '1px solid #666E80'}}/>
          <br /><a href='#' style={{lineHeight: 2.5, fontSize: '12px', color: '#A9FCD5'}}><u>Forgot your password?</u></a>
        </DialogContent>
        <DialogActions style={{ backgroundColor: '#202530', paddingRight: '5%', paddingBottom: 15,}}>
          <Button style={{color: "white"}} onClick={setLoginModal}>Cancel</Button>
          <LandingButton label={"Sign In"} onClick={onLoginSubmit}/>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {setLoginModal, login, loadUser, setAlert, clearErrors})(Login)

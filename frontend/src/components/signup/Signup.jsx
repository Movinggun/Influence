import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AlertCustom from '../layout/Alerts';
import LandingButton from "../landing/LandingButton";
import { setSignupModal, register, loadUser, clearErrors } from '../../actions/authActions';
import { setAlert } from '../../actions/alertActions';
import { connect } from 'react-redux';

const Signup = ( {auth, setSignupModal, register, setAlert, clearErrors} ) =>{

  const [user, setUser] = useState({email: '', password: '', password2: '', diplay_name: '', first_name: '', last_name: '', dob: ''});
  const { email, password, password2, display_name, first_name, last_name, dob} = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value})


  useEffect(() => {
    if (auth.error === 'User already exists') {
        setAlert('An account with that email already exists!', 'Error', "error");
        clearErrors();
    } else if (auth.isAuthenticated) {
        if (auth.setSignupModal) {
            console.log("hi");
            setAlert('You have logged in!', 'Success', "success", 1500)
            setSignupModal();
        }
    }
    // eslint-disable-next-line
}, [auth.error, auth.isAuthenticated])


  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const onSignupSubmit = () => {

    console.log("email: " + email)
    if (email === '' || password === '' || password2 === '' || display_name === '' || first_name === '' || last_name === '' || dob === ''  ) {
        setAlert('Please ensure all fields are not empty!', 'Error', "error");
        clearErrors();
    } else if(!validateEmail(email)) {
        setAlert('Invalid email entered!', 'Error', "error");
        clearErrors();
    } else if (password !== password2) {
        setAlert('Passwords do not match', 'Error', "error");
    } else {
      register({email, password, display_name, first_name, last_name, dob})
    }
  }


  return (
    <div>
      <Dialog open={auth.setSignupModal} onClose={setSignupModal} aria-labelledby="form-dialog-title" fullWidth={true} maxWidth='sm' >
        <DialogTitle style={{ backgroundColor: '#202530', color: 'white', }} id="form-dialog-title"><b>Registration Details</b></DialogTitle>
        <DialogContent style={{ backgroundColor: '#202530', color: '#BAC1D9' }} >
        <AlertCustom />
          <span style={{marginLeft: 2, fontSize: '14px'}}> Email: </span> <br />
          <Input name="email" placeholder="influencer@influence.tv" value={email} onChange={onChange} style={{width: '100%' , margin: 0, marginBottom: 20, marginTop: 5, paddingLeft: 10, paddingTop: 4, paddingBottom: 4, backgroundColor: '#181C24', borderRadius: 3, color: '#BAC1D9',  border: '1px solid #666E80'}}/>
        
          <br /> <span style={{marginLeft: 2, fontSize: '14px'}}> Password: </span> <br />
          <Input name="password" placeholder="Password" value={password} onChange={onChange} type="password" style={{width: '100%' , margin: 0, marginBottom: 20, paddingLeft: 10, paddingTop: 4, paddingBottom: 4, marginTop: 5, backgroundColor: '#181C24', color: '#BAC1D9', borderRadius: 3,  border: '1px solid #666E80'}}/>

          <br /> <span style={{marginLeft: 2, fontSize: '14px'}}> Confirm Password: </span> <br />
          <Input name="password2" placeholder="Confirm Password" value={password2} onChange={onChange} type="password" style={{width: '100%' , margin: 0, marginBottom: 20, paddingLeft: 10, paddingTop: 4, paddingBottom: 4, marginTop: 5, backgroundColor: '#181C24', color: '#BAC1D9', borderRadius: 3,  border: '1px solid #666E80'}}/>
    
          <br /> <span style={{marginLeft: 2, fontSize: '14px'}}> Display Name: </span> <br />
          <Input name="display_name" placeholder="Giantwaffle" value={display_name} onChange={onChange} type="text" style={{width: '100%' , margin: 0, marginBottom: 20, paddingLeft: 10, paddingTop: 4, paddingBottom: 4, marginTop: 5, backgroundColor: '#181C24', color: '#BAC1D9', borderRadius: 3,  border: '1px solid #666E80'}}/>

          <br /> <span style={{marginLeft: 2, fontSize: '14px'}}> First Name: </span> <br />
          <Input name="first_name" placeholder="John" value={first_name} onChange={onChange} type="text" style={{width: '100%' , margin: 0, marginBottom: 20, paddingLeft: 10, paddingTop: 4, paddingBottom: 4, marginTop: 5, backgroundColor: '#181C24', color: '#BAC1D9', borderRadius: 3,  border: '1px solid #666E80'}}/>

          <br /> <span style={{marginLeft: 2, fontSize: '14px'}}> Last Name: </span> <br />
          <Input name="last_name" placeholder="Doe" value={last_name} onChange={onChange} type="text" style={{width: '100%' , margin: 0, marginBottom: 20, paddingLeft: 10, paddingTop: 4, paddingBottom: 4, marginTop: 5, backgroundColor: '#181C24', color: '#BAC1D9', borderRadius: 3,  border: '1px solid #666E80'}}/>

          <br /> <span style={{marginLeft: 2, fontSize: '14px'}}> Date of Birth: </span> <br />
          <Input name="dob" placeholder="dd/mm/yyy" value={dob} onChange={onChange} type="date" style={{width: '100%' , margin: 0, marginBottom: 20, paddingLeft: 10, paddingTop: 4, paddingBottom: 4, marginTop: 5, backgroundColor: '#181C24', color: '#BAC1D9', borderRadius: 3,  border: '1px solid #666E80'}}/>


        </DialogContent>
        <DialogActions style={{ backgroundColor: '#202530', paddingRight: '5%', paddingBottom: 15,}}>
          <Button style={{color: "white"}} onClick={setSignupModal}>Cancel</Button>
          <LandingButton label={"Register"} onClick={onSignupSubmit}/>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {setSignupModal, register, loadUser, setAlert, clearErrors})(Signup)

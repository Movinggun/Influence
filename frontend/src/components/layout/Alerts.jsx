import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const Alerts = ( {alert}) => {
    const classes = useStyles();
    return (
        alert.length > 0 && alert.map(a => (
            <div  key={a.id} className={classes.root}>
                <Alert severity={a.type}>
                    <AlertTitle>{a.title}</AlertTitle>
                    {a.msg}
                </Alert>
                <br />
            </div>        
        ))
    )
}

const mapStateToProps = (state) => ({
    alert: state.alert
});

export default connect(mapStateToProps) (Alerts)

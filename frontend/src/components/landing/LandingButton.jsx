import React, {useCallback} from 'react';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom';

const LandingButton = ({label, onClick}) => {

    return (
        <Box>
            <Button variant={"contained"} style={{background: 'linear-gradient(to right, #F9E9AD , #FACD7F)', paddingLeft: 30, paddingRight: 30,}} onClick={onClick} >
             {label}
            </Button>
        </Box>
    )
}

export default LandingButton

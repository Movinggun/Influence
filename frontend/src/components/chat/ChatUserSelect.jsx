import React from 'react'

import Box from '@material-ui/core/Box';
import {Typography} from "@material-ui/core";

const ChatUserSelect = ( { selected } ) => {
    return (
        <Box style={{cursor: 'pointer'}}>
            <Box>
                <Box style={ selected ? {padding: '10px', backgroundColor: '#474F61', height:'48px'} :  {padding: '10px', backgroundColor: '#202530', height:'48px'}}>
                    <Box style={{ float: "right"}}>
                        <Typography style={{fontSize: '14px', color: '#BAC1D9',  lineHeight: '1.3', marginTop: '6px'}}> 
                            3:40 PM
                        </Typography>
                    </Box>
                    <Box style={{float: 'left'}}>   
                        <img  style={{borderRadius:'50%', width:'48px', height:'48px', marginTop: '1px', marginLeft:'5px', objectFit: 'cover',  marginRight:'10px', textAlign: 'center'}} src="images/juilia.svg" alt=""/>
                        <Typography style={{float: "right", lineHeight: '1.3', paddingTop: '5px'}}><strong>Julia Cassian</strong> <br />  
                        <span style={{color: '#BAC1D9', fontSize: '13px'}}> Looks good</span></Typography>

                    </Box>
                </Box>
            </Box>    
        </Box>
    )
}

export default ChatUserSelect

import React from 'react'
import Navbar from '../layout/Navbar'
import Box from '@material-ui/core/Box';

import { Link } from 'react-router-dom';


const Dashboard = () => {

    

    return (
        <div style={{backgroundColor: '#202530', height: '100vh', backgroundSize: 'cover' }}>
            <Navbar />
            <Box mr={30} ml={30}>
                 <h1 style={{color: 'white'}}>Dashboard</h1>
                 <img src="api/users/avatar/" alt="shiiit"/>
                 <form action="api/users/avatar" method="post" enctype="multipart/form-data">
                 <input type="file" name="avatar" />
                 <input type="submit" value="gg"/>
                 </form>
            </Box>
        </div>
    )
}

export default Dashboard

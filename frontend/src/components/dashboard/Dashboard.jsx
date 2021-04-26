import React from 'react'
import Navbar from '../layout/Navbar'

import { Link } from 'react-router-dom';


const Dashboard = () => {

    

    return (
        <div style={{backgroundColor: '#202530', height: '100vh', backgroundSize: 'cover' }}>
            <Navbar />
            <h4>Version 1.0.0</h4>
            <Link to="/"> Go Back</Link>
        </div>
    )
}

export default Dashboard

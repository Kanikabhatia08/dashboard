import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import {Navigate, Outlet} from 'react-router-dom'

const PrivateRoutes = () => {
    const {userLoggedIn} = useAuth();

    return (
        <div>
            {
                userLoggedIn ? 
                    <><Outlet/></> :
                    <Navigate to="/login"/>
                }
        </div>
    )
}

export default PrivateRoutes
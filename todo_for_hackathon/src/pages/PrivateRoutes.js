import React from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'
// import Login from './Frontend/Login'
const { isAuth } = useAuthContext

export default function PrivateRoutes({ Components }) {
    const location = useLocation()
    if (!isAuth) {
        return <Navigate to="/Login" state={{ from: location.pathname }} replace />
    }
    return (
        <Components />
    )
}

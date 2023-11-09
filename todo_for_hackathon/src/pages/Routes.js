import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from "../pages/Frontend/SignUp"
import Login from "../pages/Frontend/Login"
import { useAuthContext } from '../contexts/AuthContext'
import Dashboard from "../pages/Dashboard"
import PrivateRoutes from './PrivateRoutes'

export default function index() {
  const { isAuth } = useAuthContext
  return (
    <>
      <Routes>
        <Route path='/' element={<PrivateRoutes Components={Dashboard} />} />
        {/* <Route path='/' element={<Dashboard/>}/> */}
        <Route path='/SignUP' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/dashboard' element={<PrivateRoutes Components={Dashboard} />} />
      </Routes>
    </>
  )
}

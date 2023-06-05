import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const user_id = localStorage.getItem("user_id")
  return user_id ? children : <Navigate to ='/login'/>
}

export default PrivateRoute
export const ProtectedRoute = ({children}) => {
    const userid = localStorage.getItem("userid")
    return userid ? children : <Navigate to ='/login'/>
}
import React, { useContext } from 'react'
import { AuthContext } from '../Shared_Context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

export default function Protected_Router({children}) {
  const {user,loading} = useContext(AuthContext)
  const location = useLocation()
  if(loading){
    return  <span className="loading loading-infinity loading-lg"></span>
  }

  if(user){
    return children
  }
  return <Navigate to={`/auth/signIn`} state={location?.pathname}></Navigate>
}

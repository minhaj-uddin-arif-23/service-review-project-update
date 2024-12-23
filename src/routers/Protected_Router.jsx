import React, { useContext } from 'react'
import { AuthContext } from '../Shared_Context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../Components/Loading'

export default function Protected_Router({children}) {
  const {user,loading} = useContext(AuthContext)
  const location = useLocation()
  if(loading){
    return <Loading />
  }

  if(user){
    return children
  }
  return <Navigate to={`/auth/signIn`} state={location?.pathname}></Navigate>
}

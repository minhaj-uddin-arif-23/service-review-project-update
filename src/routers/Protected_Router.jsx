import React, { useContext } from 'react'
import { AuthContext } from '../Shared_Context/AuthProvider'
import { Navigate } from 'react-router-dom'

export default function Protected_Router({children}) {
  const {user,loading} = useContext(AuthContext)
  // if(loading){
  //   return <Loading />
  // }

  if(user && user?.email){
    return children
  }
  return <Navigate to={`/auth/signIn`}></Navigate>
}

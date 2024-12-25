import axios from "axios";
import { useAuth } from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecuring = axios.create({
  baseURL:import.meta.env.VITE_API_URL,
  withCredentials:true,
})

export const useAxiosSecuring = () => {
  const navigate = useNavigate()
  const {signout} = useAuth()
  useEffect(() =>{
    axiosSecuring.interceptors.response.use(
      res => {
      return res 
    },
    async error => {
      console.log('error cauth from our very own axios interceptors -->',error.response)
  
    if(error?.response?.status === 401 || error?.response?.status === 403 ){
        // logout
        // navigat
        signout()
        navigate('/auth/signIn')
    }
  }
  )
  },[signout,navigate])
  return axiosSecuring
    
}
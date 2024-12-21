// import React, { useEffect } from 'react'
// import axios from "axios";
// import { useAuth } from './useAuth';
// import { useNavigate } from 'react-router-dom';

// export const axiosSecure = axios.create({
//   baseURL:import.meta.env.VITE_API_URL,
//   withCredentials:true
// })


// export const useAxiosSecure = () => {
//   const {signout} = useAuth()
//   const navigate = useNavigate()
//   useEffect(()=>{
//     axiosSecure.interceptors.response.use(res =>{
//       return res
//     },
//     async error => {
//       console.log('error found in interceptor-->',error.response);
//       if(error.response.status === 401 || error.response.status === 403){
//         signout()
//         navigate('/signIn')
//       }
//     }
//   )
//   },[signout,navigate])
//   return axiosSecure
// }

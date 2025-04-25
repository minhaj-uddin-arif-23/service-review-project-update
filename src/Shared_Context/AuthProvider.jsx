/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // newly account
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sing in with email & password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google sign in
  const google = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // sign out
  const signout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // paassword reset email
  const passWordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const updateUserInfo = (name,photo) => {
    return updateProfile(auth.currentUser,{
      displayName:name,
      photURL:photo
    }
      );
  };

  const userInformation = {
    user,
    loading,
    signIn,
    google,
    signout,
    createUser,
    passWordReset,
    updateUserInfo,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      // setUser(currentUser)
      if(currentUser?.email){
        setUser(currentUser);
        await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          { email: currentUser?.email },{withCredentials:true}
        );
        
      }else{
           // remove from the server side
        setUser(currentUser)
        await axios.get(
          `${import.meta.env.VITE_API_URL}/logout`,
          {withCredentials:true}
        );
        
      }
      setLoading(false);
    });
    return () => {
       unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={userInformation}>
      {children}
    </AuthContext.Provider>
  );
}
/**
 * 
 *      if (currentUser?.email) {
    
      }else{ 
       
      }
 */
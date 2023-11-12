/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const UserContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    const [loading,setLoading]= useState(true)
    const auth = getAuth(app)

    const  registration = (email,password)=>{
      setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const existingUser = (email,password)=>{
      setLoading(false)
        return signInWithEmailAndPassword (auth, email, password)
    }
    const logout =()=>{
      return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
            //   const uid = user.uid;
              setUser(user)
              setLoading(false)
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
          return ()=> unSubscribe()
    },[])

    const data  ={
        registration,
        existingUser,
        setUser,
        user,
        loading,
        setLoading,
        logout
    }
    return (
        <UserContext.Provider value={data}>
           {children}
        </UserContext.Provider>
        
    );
};

export default AuthProvider;


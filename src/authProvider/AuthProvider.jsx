/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";

export const UserContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    const auth = getAuth(app)

    const  registration = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const existingUser = (email,password)=>{
        return signInWithEmailAndPassword (auth, email, password)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
            //   const uid = user.uid;
              setUser(user)
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
    }
    return (
        <UserContext.Provider value={data}>
           {children}
        </UserContext.Provider>
        
    );
};

export default AuthProvider;


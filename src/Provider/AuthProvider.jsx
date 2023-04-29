import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)





function AuthProvider({children}) {
    const [user, setUser]=useState(null)

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    

useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth, carentUser=>{
        // console.log(carentUser);
        setUser(carentUser)
    })
    return ()=>{
        return unsubcribe()
    }
},[])



    const authInfo = {
        user,
        createUser
    }
  return (
    <AuthContext.Provider value={authInfo} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
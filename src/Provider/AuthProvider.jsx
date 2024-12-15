import React, { createContext, useState } from 'react'
import app from '../../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext =createContext();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState();
    const [loading,setLoading]=useState(true)

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)

    }

 
    const authinfo={ signIn,user,loading

    }
    
  return (
    <div>
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>

    </div>
  )
}

export default AuthProvider
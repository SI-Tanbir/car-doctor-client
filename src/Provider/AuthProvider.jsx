import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {


  //managing state
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);



  //adding signup function
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };



  // Set up the observer
  useEffect(()=>{


    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log("User signed in:", user?.email);
        setUser(user?.email)
      } else {
        // User is signed out
        console.log("User signed out");
      }
    });

    return () => unsubscribe();


  },[])


   // Handle logout
   const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
        setUser(null);  // Clear user data when logged out
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  };





  const authinfo = { signIn, user, loading,setLoading,handleLogout };

  return (
    <div>
      <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

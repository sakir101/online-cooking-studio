import React, { createContext, useState, useEffect } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const handleSignin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    };

    const signInGoogleHandler = (googleProvider) => {
        setLoading(true);
       return signInWithPopup(auth, googleProvider)
         
      }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        })

        return() =>{
            unSubscribe();
        }
    },[]) 

    const authInfo = {
        user,
        loading,
        createUser,
        handleSignin, 
        logOut,
        signInGoogleHandler
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
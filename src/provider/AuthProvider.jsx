import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut,  signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,  setUser] = useState(null);
    const [loadign, setLoading] = useState(true);

    //userCreated new
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
        setLoading(true);
    }

    //signIn user
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
        setLoading(true);
    }
    ///signOut
    const logOut = () =>{
        return signOut(auth)
        setLoading(true);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user', currentUser)
            setLoading(false)
        });
        return()=>{
            return unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        loadign,
        createUser,
        signIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
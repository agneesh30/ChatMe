import { onAuthStateChanged } from 'firebase/auth';
import React, { useState, useEffect, useContext } from 'react'
import { auth } from '../firebase';

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("auth called", user);
            setCurrentUser(user)
        })
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}

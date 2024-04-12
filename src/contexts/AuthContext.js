import React, { useContext, useState, useEffect } from "react";
import { auth } from "../Firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() { //custom hook
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null); //user information
    const [userLoggedIn, setUserLoggedIn] = useState(false); //true if user is logged in
    const [isEmailUser, setIsEmailUser] = useState(false); //loading state of the hook
    const [isGoogleUser, setIsGoogleUser] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser); //if user logs in or logs out
        // console.log(unsubscribe,"unsubscribe")
        return unsubscribe; //also used for clean up clean up what??
    }, []);

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({ ...user });
            // console.log(user,"user")
            // // check if provider is email and password login
            // const isEmail = user.providerData.some(
            //     (provider) => provider.providerId === "password"
            // );
            setUserLoggedIn(true);
            // setIsEmailUser(isEmail);
        } 
        else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const value = {
        userLoggedIn,
        isEmailUser,
        isGoogleUser,
        currentUser,
        setCurrentUser
    };

    return (
        <AuthContext.Provider value={value}>
        {!loading && children} 
        {/* if loading is false, children is returned */}
        </AuthContext.Provider>
    );
}

/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, useContext, createContext, useEffect } from "react";
const Authcontext = createContext()
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        const storedAuth = localStorage.getItem('auth');
        return storedAuth
            ? JSON.parse(storedAuth)
            : { accessToken: "", user: null };
    })
    

    useEffect(() => {
        const authData = JSON.parse(localStorage.getItem('auth'));
        if (authData) {
            setAuth(authData);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('auth')
        setAuth({
            accsessToken: '',
            user: null
        })
    }

    return (
        <Authcontext.Provider value={{ auth, setAuth, logout }}>
            {children}
        </Authcontext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(Authcontext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
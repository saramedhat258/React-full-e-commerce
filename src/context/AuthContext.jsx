/* eslint-disable react/prop-types */
import { useState,useContext,createContext,useEffect} from "react";



const Authcontext=createContext()
export const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({
        accsessToken:"",
        user:null
    })

    useEffect(() => {
    const authData = JSON.parse(localStorage.getItem('auth'));
    if (authData) {
        setAuth(authData); 
    }
    }, []);
    
    return(
        <Authcontext.Provider value={{auth,setAuth}}>
            {children}
        </Authcontext.Provider>
    )
}

export const useAuth=()=>{
    const context=useContext(Authcontext)
    if(context===undefined){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
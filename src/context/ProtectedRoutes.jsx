import { useAuth } from "./AuthContext"
import { Outlet,Navigate } from "react-router-dom"

function ProtectedRoutes() {
    const {auth}=useAuth()
    if(!auth.accessToken){
        return <Navigate to='/signin'/>
    }
    return <Outlet/>
}

export default ProtectedRoutes
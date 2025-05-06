import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Logout() {
    const { logout } = useAuth()
    const navigate=useNavigate()
    const handleLogout=()=>{
        logout();
        navigate('/signin')
    }
    return (
        <>
            <div className="sm:w-3/4 text-center m-auto capitalize my-24">
                <p className="text-2xl my-5 font-semibold">are you sure about logout?</p>
                <div className="flex gap-5 ">
                    <button onClick={handleLogout} className="p-2 bg-black text-white rounded-lg w-1/2">Logout</button>
                    <button onClick={()=>navigate('/home')} className="p-2 border-2 rounded-lg w-1/2">Cancle</button>
                </div>
            </div>
        </>
    )
}

export default Logout
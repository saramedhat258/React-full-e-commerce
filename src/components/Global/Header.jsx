import { assets } from "../../assets/icons/assets"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Link } from "react-router-dom"
import Sidecart from "../cart/Sidecart"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

function Header() {
    const [open, setopen] = useState(false)
    const [showUser,setShowUser]=useState(false)
    const { auth,logout } = useAuth()
    const name = auth?.user?.name;
    const navigate=useNavigate()

    let finalnameIcon = "";
    if (name) {
        const nameIcon = name.split(" ");
        if (nameIcon.length >= 2) {
            finalnameIcon = nameIcon[0][0].toUpperCase() + nameIcon[1][0].toUpperCase(); 
        } else if (nameIcon.length === 1) {
            finalnameIcon = nameIcon[0][0].toUpperCase(); 
        }
    }
    const handleLogin=()=>{
        logout();
        navigate('/signin')
    }

    return (
        <>
            <header >
                <section className=" bg-orange-100 bg-opacity-50 fixed w-full z-50">
                    <section className="pt-5 md:pt-7 w-5/6 grid grid-cols-4 justify-between text-center pb-3 md:pb-5 mx-auto ">
                        <div>
                            <img src={assets.logo1} alt="" />
                        </div>
                        <div className="gap-5 col-span-2 mx-auto hidden md:flex text-lg">
                            <Link to={'/home'}>Home</Link>
                            <Link to={'/shop'}>Shop</Link>
                            <a href="">Product</a>
                            <a href="#contact">Contact Us</a>
                        </div>
                        <div className=" gap-5 hidden md:flex justify-end">
                            <p onClick={()=>setShowUser(!showUser)} className="rounded-full p-1 border-2 border-black cursor-pointer">{finalnameIcon}</p>
                            <Sidecart />
                        </div>
                        <div className="justify-end flex gap-5 md:hidden col-span-3 items-center">
                            <p onClick={()=>setShowUser(!showUser)} className="rounded-full p-1 border-2 border-black cursor-pointer">{finalnameIcon}</p>
                            <Sidecart />
                            <FontAwesomeIcon className="text-xl" onClick={() => setopen(!open)} icon={faBars} />
                        </div>
                    </section>
                    {
                        open ?
                            <div className="w-5/6 text-center mt-5 rounded flex flex-col gap-y-3 mx-auto bg-orange-100 py-4 bg-opacity-65 left-8 sm:left-16 md:hidden z-50 absolute">
                                <Link to={'/home'}>Home</Link>
                                <Link to={'/shop'}>Shop</Link>
                                <p>Product</p>
                                <a href="#contact">Contact Us</a>
                            </div>
                            : ''
                        
                    }
                    
                </section>
                {
                        showUser?
                        <div className="md:w-1/4 w-5/6 m-auto absolute md:right-28 right-16 top-24 flex flex-col gap-5 bg-orange-100 bg-opacity-80 p-5 ">
                            <p >Welcome, <span className="font-medium">{name}</span></p>
                            <button onClick={handleLogin} className="bg-black text-white p-3 rounded-lg w-">logout</button>
                        </div>
                        :''
                    }
            </header>

        </>
    )
}

export default Header
import { useState } from "react";
import Header from "../components/Global/Header"
import { useAuth } from "../context/AuthContext";
import { Link, Outlet } from "react-router-dom";

function Profile() {
    const { auth } = useAuth()
    const name = auth?.user?.name;
    console.log(auth)
    const profile = [
        {name:'orders',path:'/profile/orders'},
        {name:'wishlist',path:'/profile/wishlist'},
        {name:'log out',path:'/profile/logout'}]
    const [active, setActive] = useState('orders')
    return (
        <>
            <Header />
            <div className="pt-[67px] md:pt-[83px] sm:w-3/4 w-full m-auto">
                <p className="text-center text-4xl font-semibold my-10 md:mb-24 mb-10">My Account</p>
                <div className="flex md:flex-row flex-col justify-between ">
                    <div className="bg-gray-100 md:w-1/4 sm:w-3/4 w-5/6 m-auto p-5 rounded-lg  ">
                        <p className="text-center font-semibold text-2xl capitalize my-8">{name}</p>
                        <div className="flex flex-col gap-8">
                            {
                                profile.map(p =>
                                    <Link to={p.path} className={`capitalize font-semibold  pb-1 cursor-pointer ${active === p.name ? 'border-b-2 border-b-black text-black':'text-gray-500'}`} onClick={() => setActive(p.name)} key={p.name}>{p.name}</Link>
                                )
                            }
                        </div>
                    </div>
                    <div className="sm:w-3/5 mx-auto w-3/4">
                        <Outlet/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile
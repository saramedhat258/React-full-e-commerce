import { assets } from "../assets/icons/assets"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Link } from "react-router-dom"
import Sidecart from "./Sidecart"

function Header() {
    const [open, setopen] = useState(false)
    return (
        <>
            <header >
                <section className=" bg-orange-100 bg-opacity-50 fixed w-full z-50">
                    <section className="pt-5 md:pt-7 w-5/6 grid grid-cols-4 justify-between text-center pb-3 md:pb-5 mx-auto ">
                        <div>
                            <img src={assets.logo1} alt="" />
                        </div>
                        <div className="gap-5 col-span-2 mx-auto hidden md:flex text-lg">
                            <Link to={'/'}>Home</Link>
                            <Link to={'/shop'}>Shop</Link>
                            <a href="">Product</a>
                            <a href="">Contact Us</a>
                        </div>
                        <div className=" gap-5 hidden md:flex justify-end">
                            <FontAwesomeIcon className="text-xl" icon={faMagnifyingGlass} />
                            <Sidecart/>
                        </div>
                        <div className="justify-end flex gap-5 md:hidden col-span-3">
                            <Sidecart/>
                            <FontAwesomeIcon className="text-xl" onClick={() => setopen(!open)} icon={faBars} />
                        </div>
                    </section>
                    {
                        open ?
                            <div className="w-5/6 text-center mt-5 rounded flex flex-col gap-y-3 mx-auto bg-orange-100 py-4 bg-opacity-65 left-8 sm:left-16 md:hidden z-50 absolute">
                                <Link to={'/'}>Home</Link>
                                <Link to={'/shop'}>Shop</Link>
                                <p>Product</p>
                                <p>Contact Us</p>
                                <FontAwesomeIcon className="text-xl" icon={faMagnifyingGlass} />
                            </div>

                            : ''
                    }
                </section>
            </header>

        </>
    )
}

export default Header
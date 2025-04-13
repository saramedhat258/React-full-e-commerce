/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { assets } from "../../assets/icons/assets"
import { useContext } from "react"
import { Cartcontext } from "../../context/CartContext"
function Bestsellers({pro}) {
    const {AddToCart}=useContext(Cartcontext)
    const defaultColor=pro?.variants?.length !== 0?pro.variants?.[0]?.options?.[0]?.value:null
    return (
        <>
            <Link to={`/productdetail/${pro._id}`} className="relative snap-center mb-5 group/item cursor-pointer">
                <div className="absolute left-8 top-5">
                    <img className='mb-2' src={assets.newpro} alt="new arrival product" />
                    <img src={assets.fiften} alt="50% dicound" />
                </div>
                <img className="h-80 min-w-[250px]" src={pro.images[0].secure_url} />
                <button onClick={(e)=>{e.preventDefault(); e.stopPropagation(); AddToCart(pro,defaultColor)}} className="bg-black w-5/6 text-white py-2 absolute bottom-8 left-5 rounded invisible group-hover/item:visible">Add To Cart</button>
            </Link>
        </>
    )
}

export default Bestsellers
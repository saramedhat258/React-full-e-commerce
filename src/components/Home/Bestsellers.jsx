/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { assets } from "../../assets/icons/assets"

function Bestsellers({pro}) {
    return (
        <>
            <Link to={`/productdetail/${pro._id}`} className="relative snap-center mb-5 group/item cursor-pointer">
                <div className="absolute left-8 top-5">
                    <img className='mb-2' src={assets.newpro} alt="new arrival product" />
                    <img src={assets.fiften} alt="50% dicound" />
                </div>
                <img className="h-80 min-w-[250px]" src={pro.images[0].secure_url} />
                <button className="bg-black w-5/6 text-white py-2 absolute bottom-8 left-5 rounded invisible group-hover/item:visible">Add To Cart</button>
            </Link>
        </>
    )
}

export default Bestsellers
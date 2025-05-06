/* eslint-disable react/prop-types */
import { assets } from '../assets/icons/assets'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Cartcontext } from '../context/CartContext'
import StarRating from './Global/StarRating'

function ProductCard({ pro }) {
    const { AddToCart } = useContext(Cartcontext)
    const navigate = useNavigate()
    const defaultColor = pro?.variants?.length !== 0 ? pro.variants?.[0]?.options?.[0]?.value : null
    return (
        <>
            <div className="relative snap-center mb-5 group mx-auto">
                <div className="absolute left-8 top-5">
                    <img className='mb-2' src={assets.newpro} alt="new arrival product1" />
                    <img src={assets.fiften} alt="50% dicound" />
                </div>
                <div><img className="h-[350px]" src={pro.images[0].secure_url} onClick={() => navigate(`/productdetail/${pro._id}`)} /></div>

                <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); AddToCart(pro, defaultColor) }} className="bg-black w-3/4 text-white py-2 absolute top-2/3 md:top-[60%] left-6 rounded invisible group-hover:visible">Add To Cart</button>
                <div className="mt-3 font-medium">
                    <p><StarRating rating={pro.rate} /> </p>
                    <p className="text-lg">{pro.name}</p>
                    <p>{pro.price}$</p>
                </div>
            </div>
            
        </>
    )
}

export default ProductCard
/* eslint-disable react/prop-types */
import { assets } from '../assets/icons/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function ProductCard({pro}) {

    return (
        <>
            <div className="relative snap-center mb-5 group/item mx-auto">
                <div className="absolute left-8 top-5">
                    <img className='mb-2' src={assets.newpro} alt="new arrival product1" />
                    <img src={assets.fiften} alt="50% dicound" />
                </div>
                <Link to={`/productdetail/${pro._id}`}><img className="h-[350px]" src={pro.images[0].secure_url} /></Link>
                <button className="bg-black w-3/4 text-white py-2 absolute top-2/3 md:top-[60%] left-6 rounded invisible group-hover/item:visible">Add To Cart</button>
                <div className="mt-3 font-medium">
                    <p><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
                    <p className="text-lg">{pro.name}</p>
                    <p>{pro.price}$</p>
                </div>
            </div>
        </>
    )
}

export default ProductCard
import Header from '../components/Global/Header'
import Footer from '../components/Global/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { fetchOneProduct } from '../Axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Cartcontext } from '../context/CartContext'

function Productdetail() {
    const [details, setDetails] = useState([])
    const [selectedColor, setSelectedColor] = useState(null)
    const [err, setErr] = useState(null)
    const [productInCart, setproductInCart] = useState(null)
    const { AddToCart, cartPro, increseQun, decreseQun } = useContext(Cartcontext)
    const param = useParams()

    /* to get desired product from backend */
    console.log(cartPro)
    useEffect(() => {
        fetchOneProduct(setDetails, param.id)
    }, [param.id])
    /* to know if this product is in cart or no??? */
    useEffect(() => {
        const compositeKey = selectedColor ? `${details._id}-${selectedColor}` : details._id
        const foundProduct = cartPro.find(item =>
            item?.compositeKey === compositeKey
        );
        setproductInCart(foundProduct);
    }, [cartPro, details._id, selectedColor]);

    /* shorten backend paths */
    const imageSRC = details?.images?.length > 0 ? details.images[0].secure_url : "";
    const variant = details.variants?.[0]?.options

    /* handle add to cart */
    const addtocart = () => {
        if (!selectedColor && details?.variants?.length !== 0) {
            setErr('Please chosse color you prefer before add product to cart')
        }
        else {
            AddToCart(details, selectedColor)
            setErr(null)
        }
    }

    return (
        <>
            <Header />
            {/* product*/}
            <section className='w-3/4 mx-auto grid grid-col-1 md:grid-cols-2 pt-32 gap-5'>
                {/* product images */}
                <section className='mx-auto w-3/4 '>
                    <img src={imageSRC} alt="product detail" className='cursor-pointer w-full h-full' />
                </section>
                {/* product info */}
                <section className=''>
                    <section className='flex gap-1 align-center'>
                        <p><FontAwesomeIcon icon={faStar} className='text-yellow-300' /></p>
                        <p><FontAwesomeIcon icon={faStar} className='text-yellow-300' /></p>
                        <p><FontAwesomeIcon icon={faStar} className='text-yellow-300' /></p>
                        <p><FontAwesomeIcon icon={faStar} className='text-yellow-300' /></p>
                        <p><FontAwesomeIcon icon={faStar} className='text-yellow-300' /></p>
                        <p>11 review</p>
                    </section>
                    <section className='space-y-2 mt-5'>
                        <p className='text-3xl font-medium'>{details.name}</p>
                        <p className=' text-gray-500'>{details.description}</p>
                        <p className='text-xl font-medium'>{details.price} $</p>
                    </section>
                    <hr className='my-5' />
                    <section>
                        <p className='text-sm text-gray-500 font-bold mb-2'>meaurements</p>
                        <p>17 1/2x20 5/8 &quot;</p>
                        {/* select color */}
                        {details?.variants?.length !== 0 ?
                            <>
                                <p className='mt-5 text-sm text-gray-500 font-bold mb-3'>Choose color &gt; </p>
                                <p className='flex gap-2'>
                                    {variant?.map(color => (
                                        <div key={color.value} >
                                            <p onClick={() => setSelectedColor(color.value)} className={`w-6 h-6 rounded-full border-2 bg-${color.value === 'gray' ? 'gray-200' : color.value}  ${selectedColor === color.value ? 'border-blue-700 ' : ' border-gray-100'} cursor-pointer`}></p>
                                            <p className='text-sm text-gray-400 mt-2'>{color.value}</p>
                                        </div>

                                    ))}

                                </p>
                            </>
                            : ''
                        }

                        {/* buttons */}
                        <section className='mt-14 '>
                            <section className='grid grid-cols-3 gap-2 mb-3'>
                                {/* increase decrease */}
                                {
                                    productInCart && <section className='col-span-1 flex justify-around p-2 bg-zinc-200 items-center rounded-lg'>
                                        <p className='cursor-pointer font-medium' onClick={() => decreseQun(productInCart)}>-</p>
                                        <p className='cursor-pointer font-bold'>{productInCart?.quntity}</p>
                                        <p className='cursor-pointer font-medium' onClick={() => increseQun(productInCart)}>+</p>
                                    </section>
                                }
                                {/* add to wishlist */}
                                <section className={`cursor-pointer flex items-center gap-2 justify-center ${productInCart ? 'col-span-2' : 'col-span-3 p-2'} border-black border-2 text-center rounded-lg`}>
                                    <FontAwesomeIcon icon={faHeart} /> <p className=''>add to wishlist</p>
                                </section>
                            </section>
                            {/* add to cart */}
                            <p onClick={() => addtocart()} className='bg-black rounded-lg text-center p-2 text-white cursor-pointer'>Add to cart</p>
                            {err && <p className='text-red-600 text-sm mt-1'>{err}</p>}
                        </section>
                    </section>
                    <hr className='mt-5' />
                    <section className='mt-2 flex gap-10'>
                        <p className='text-sm'>category: </p>
                        <p className='text-sm text-gray-500'>{details?.category?.name} </p>
                    </section>

                </section>

            </section>
            <Footer />
        </>
    )
}

export default Productdetail
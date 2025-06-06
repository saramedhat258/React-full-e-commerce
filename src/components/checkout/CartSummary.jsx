/* eslint-disable react/prop-types */
import { useState, useContext } from "react"
import { Cartcontext } from '../../context/CartContext';

function CartSummary({setStep}) {
    const {subtotal_total,setAddedPrice } = useContext(Cartcontext)
    const { subtotal, total } = subtotal_total()
    const [checked, setChecked] = useState('Free shipping')
    const cartsummary = [
        {
            name: 'Free shipping',
            price: 0.00
        },
        {
            name: 'Express shipping',
            price: 15.00
        },
        {
            name: 'Pick Up',
            price: 21.00
        }
    ]
    return (
        <>

                <p>Cart Summary</p>
                <div className="flex flex-col gap-3 my-5">
                    {cartsummary.map(cart => (
                        <div key={cart.name} className="border-[1px] p-3 has-[:checked]:bg-gray-100 has-[:checked]:border-black border-gray-600 flex justify-between rounded-md" onClick={() => {setChecked(cart.name), setAddedPrice(cart.price)}}>
                            <div className="flex gap-1 items-center">
                                <input type="radio" name={cart.name} checked={cart.name === checked} onChange={() => {setChecked(cart.name), setAddedPrice(cart.price)}} className="checked:bg-black focus:ring-0" />
                                <label htmlFor="Free shipping">{cart.name}</label>
                            </div>
                            <p>${cart.price}</p>
                        </div>
                    ))}
                </div>
                <div className='mt-12'>
                    <div className='flex justify-between'>
                        <p>Subtotal</p>
                        <p className='font-medium'>${subtotal}</p>
                    </div>
                    <hr className='my-3' />
                    <div className='flex justify-between text-xl font-medium'>
                        <p>Total</p>
                        <p>${total}</p>
                    </div>
                    <button onClick={()=>setStep(prev=>prev+1)} className='inline-block my-5 w-full p-3 text-white bg-black rounded-lg text-center'>Checkout</button>
                </div>
        </>
    )
}

export default CartSummary
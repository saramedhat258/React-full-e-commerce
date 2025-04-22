/* eslint-disable react/prop-types */
import { useState } from "react"
function CheckForms({ setStep }) {
    const methods = ['Pay by Card Credit', 'Paypal']
    const [checked, setChecked] = useState('Pay by Card Credit')
    return (
        <>
            {/* Contact Info */}
            <div className="rounded-md border-[1px] border-zinc-800 p-7 mb-2 text-sm sm:text-base">
                <p className="text-2xl font-medium my-3">Contact Information</p>
                <form action="">
                    <div className="flex gap-5 ">
                        <div className="flex flex-col gap-2 w-full min-w-[110px]">
                            <label htmlFor="firstName" className="text-zinc-500 font-medium">First Name</label>
                            <input type="text" id="firstName" placeholder="First Name" className="px-4 placeholder:text-zinc-400 placeholder:font-light rounded-md focus:ring-gray-400 border-gray-300 focus:border-gray-300" />
                        </div>
                        <div className="flex flex-col gap-2 w-full min-w-[110px]">
                            <label htmlFor="lastName" className="text-zinc-500 font-medium">Last Name</label>
                            <input type="text" id="lastName" placeholder="Last Name" className="px-4 placeholder:text-zinc-400 placeholder:font-light rounded-md focus:ring-gray-400 border-gray-300 focus:border-gray-300" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full my-5">
                        <label htmlFor="phone" className="text-zinc-500 font-medium">Phone Number</label>
                        <input type="text" id="phone" placeholder="Phone Number" className="px-4 placeholder:text-zinc-400 placeholder:font-light rounded-md focus:ring-gray-400 border-gray-300 focus:border-gray-300" />
                    </div>
                    <div className="flex flex-col gap-2 w-full mb-5">
                        <label htmlFor="email" className="text-zinc-500 font-medium">Email Address</label>
                        <input type="email" id="email" placeholder="Email Address" className="px-4 placeholder:text-zinc-400 placeholder:font-light rounded-md focus:ring-gray-400 border-gray-300 focus:border-gray-300" />
                    </div>
                </form>
            </div>
            {/* Shipping Address */}
            <div className="rounded-md border-[1px] border-zinc-800 p-7 mb-10 text-sm sm:text-base">
                <p className="text-2xl font-medium my-3">Contact Information</p>
                <form action="">
                    <div className="flex flex-col gap-2 w-full my-5">
                        <label htmlFor="StreetAddress" className="text-zinc-500 font-medium">Street Address</label>
                        <input type="text" id="StreetAddress" placeholder="Street Address " className="px-4 placeholder:text-zinc-400 placeholder:font-light rounded-md focus:ring-gray-400 border-gray-300 focus:border-gray-300" />
                    </div>
                    <div className="flex flex-col gap-2 w-full my-5">
                        <label htmlFor="Country" className="text-zinc-500 font-medium">Country</label>
                        <input type="text" id="Country" placeholder="Country" className="px-4 placeholder:text-zinc-400 placeholder:font-light rounded-md focus:ring-gray-400 border-gray-300 focus:border-gray-300" />
                    </div>
                    <div className="flex flex-col gap-2 w-full mb-5">
                        <label htmlFor="Town" className="text-zinc-500 font-medium">Town / City </label>
                        <input type="email" id="Town" placeholder="Town / City" className="px-4 placeholder:text-zinc-400 placeholder:font-light rounded-md focus:ring-gray-400 border-gray-300 focus:border-gray-300" />
                    </div>
                    <div className="flex gap-5 ">
                        <div className="flex flex-col gap-2 w-full min-w-[110px]">
                            <label htmlFor="State" className="text-zinc-500 font-medium">State</label>
                            <input type="text" id="State" placeholder="State" className="px-4 placeholder:text-zinc-400 placeholder:font-light rounded-md focus:ring-gray-400 border-gray-300 focus:border-gray-300" />
                        </div>
                        <div className="flex flex-col gap-2 w-full min-w-[110px]">
                            <label htmlFor="ZipCode" className="text-zinc-500 font-medium ">Zip Code</label>
                            <input type="text" id="ZipCode" required placeholder="Zip Code" className="px-4 placeholder:text-zinc-400 placeholder:font-light rounded-md focus:ring-gray-400 border-gray-300 focus:border-gray-300" />
                        </div>
                    </div>
                </form>
            </div>
            {/* payment method */}
            <div className="rounded-md border-[1px] border-zinc-800 p-7 text-sm sm:text-base">
                <p className="text-2xl font-medium my-3">Payment method</p>
                {methods.map(cart => (
                    <div key={cart} className="border-[1px] p-3 my-5 has-[:checked]:bg-gray-100 has-[:checked]:border-black border-gray-600 rounded-md" onClick={() => { setChecked(cart.name) }}>
                        <div className="flex gap-1 items-center">
                            <input type="radio" name={cart} checked={cart === checked} onChange={() => { setChecked(cart) }} className="checked:bg-black focus:ring-0" />
                            <label htmlFor="Free shipping">{cart}</label>
                        </div>
                    </div>
                ))}
                <hr className="my-3 border-[1px] border-zinc-400" />
                <div className="flex flex-col gap-2 w-full mb-5">
                    <label htmlFor="CardNumber" className="text-zinc-500 font-medium">Card Number</label>
                    <input type="text" id="Card Number" placeholder="1234 1234 1234" className="px-4 placeholder:text-zinc-400 placeholder:font-light rounded-md focus:ring-gray-400 border-gray-300 focus:border-gray-300" />
                </div>
                <div className="flex gap-5 ">
                    <div className="flex flex-col gap-2 w-full min-w-[110px] ">
                        <label htmlFor="Expirationdate" className="text-zinc-500 font-medium">Expiration date</label>
                        <input type="text" id="Expirationdate" placeholder="MM/YY" className="px-4 placeholder:text-zinc-400 placeholder:font-light rounded-md focus:ring-gray-400 border-gray-300 focus:border-gray-300" />
                    </div>
                    <div className="flex flex-col gap-2 w-full min-w-[110px] ">
                        <label htmlFor="CVC" className="text-zinc-500 font-medium">CVC</label>
                        <input type="text" id="CVC" required placeholder="CVC Code" className="px-4 placeholder:text-zinc-400 placeholder:font-light rounded-md focus:ring-gray-400 border-gray-300 focus:border-gray-300" />
                    </div>
                </div>
            </div>
            <button className="p-3 text-center text-white bg-black rounded-md hidden lg:block" onClick={() => setStep(prev => prev + 1)}>Place Order</button>
        </>
    )
}

export default CheckForms
/* eslint-disable react/prop-types */
import { Check } from "lucide-react"
function CheckoutSteps({ step }) {
    return (
        <>
            <div className="grid grid-cols-9 gap-6 m-auto lg:w-3/4 w-full ">
                <div className={`md:flex ${step === 1 ? 'flex' : 'hidden'} md:col-span-3 col-span-9 gap-3 border-b-2 ${step === 1 ? 'border-b-black' : 'border-b-[#38CB89]'} pb-4 w-full text-lg`}>
                    <p className={`text-white text-center rounded-full ${step === 1 ? 'bg-black' : 'bg-[#38CB89]'}  w-7 h-7`}>
                        {step === 1 ? '1' : <Check color="white" className="m-auto my-[3px]" />}
                    </p>
                    <p className={`${step !== 1 && 'text-[#38CB89]'}`}>Shopping Cart</p>
                </div>
                <div className={`md:flex ${step === 2 ? 'flex' : 'hidden'} md:col-span-3 col-span-9 gap-3 border-b-2  ${step === 2 ? 'border-b-black' : step > 2 ? 'border-b-[#38CB89]' : 'border-b-gray-300'} pb-4 w-full text-lg`}>
                    <p className={`text-white text-center rounded-full ${step === 2 ? 'bg-black' : step > 2 ? 'bg-[#38CB89]' : 'bg-gray-300'}  w-7 h-7`}>
                        {step === 2 ? '2' : step < 2 ? '2' : <Check color="white" className="m-auto my-[3px]" />}
                    </p>
                    <p className={`${step !== 2 && step > 2 ? 'text-[#38CB89]' : step === 2 ? 'text-black' : 'text-gray-300'}`}>Checkout details</p>
                </div>
                <div className={`md:flex ${step === 3 ? 'flex' : 'hidden'} md:col-span-3 col-span-9 gap-3 border-b-2 ${step === 3 ? 'border-b-black' : step > 3 ? 'border-b-[#38CB89]' : 'border-b-gray-300'} pb-4 w-full text-lg`}>
                    <p className={`text-white text-center rounded-full ${step === 3 ? 'bg-black' : step > 3 ? 'bg-[#38CB89]' : 'bg-gray-300'}  w-7 h-7`}>
                        {step === 3 ? '3' : step < 3 ? '3' : <Check color="white" className="m-auto my-[3px]" />}
                    </p>
                    <p className={`${step !== 3 && step > 3 ? 'text-[#38CB89]' : step === 3 ? 'text-black' : 'text-gray-300'}`}>Order complete</p>
                </div>
            </div>
        </>
    )
}

export default CheckoutSteps
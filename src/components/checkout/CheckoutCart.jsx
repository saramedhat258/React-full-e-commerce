import { useState } from "react"
import Header from "../Global/Header"
import MinFooter from "../Global/MinFooter"
import { useContext } from "react"
import { Cartcontext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CheckoutSteps from "./CheckoutSteps"
import ProductsCatDetails from "./ProductsCatDetails"
import CartSummary from "./CartSummary"
import SmallProduct from "./SmallProduct"
import OrderSummary from "./OrderSummary"
import CheckForms from "./CheckForms"
import OrderComplete from "./OrderComplete"
import { OrderContext } from "../../context/OrderDetailContext"
function CheckoutCart() {
    const [step, setStep] = useState(1)
    const { cartPro } = useContext(Cartcontext)
    const { handleClick } = useContext(OrderContext)

    return (
        <>
            <div className="flex flex-col h-screen">
                <Header />
                <p className="text-center text-5xl font-bold pt-28">{step === 1 ? 'Cart' : step === 2 ? 'Check Out' : 'Complete!'}</p>

                {
                    cartPro.length !== 0 ?
                        <div className="md:w-4/5 w-3/4 mx-auto my-10 md:px-10 flex-grow">
                            {/* steps */}
                            <CheckoutSteps step={step} />
                            {/* cart items */}
                            {step === 1 ?
                                <div className="grid grid-cols-8 gap-14 my-16 justify-center">
                                    {/* product-quantity-price */}
                                    <div className="lg:col-span-5 col-span-8 lg:flex flex-col hidden gap-5">
                                        <ProductsCatDetails />
                                    </div>
                                    <div className="lg:col-span-5 col-span-8 lg:hidden flex-col flex gap-5 lg:w-full w-3/4 m-auto">
                                        <SmallProduct />
                                    </div>
                                    {/* cart summary */}
                                    <div className="lg:col-span-3 col-span-8 border-[1px] rounded-md border-black p-3 h-fit lg:w-full w-3/4 m-auto my-0">
                                        <CartSummary setStep={setStep} />
                                    </div>
                                </div>
                                /* step 2 */
                                : step === 2 ?
                                    <div className="grid grid-cols-8 gap-14 my-16 justify-center ">
                                        {/* product-quantity-price */}
                                        <div className="lg:col-span-5 col-span-8 flex flex-col gap-5 lg:w-full w-3/4 m-auto">
                                            <CheckForms setStep={setStep}/>
                                        </div>
                                        {/*order summary */}
                                        <div className="lg:col-span-3 col-span-8 border-[1px] rounded-md w-3/4 m-auto lg:w-full border-black p-3 h-fit my-0">
                                            <OrderSummary/>
                                            
                                        </div>
                                        <button className="p-3 text-center col-span-8 text-white bg-black rounded-md block lg:hidden w-3/4 m-auto" onClick={() =>handleClick(setStep)}>Place Order</button>
                                    </div>
                                /* step 3 */
                                    : <div className="my-16">
                                        <OrderComplete/>
                                    </div>
                            }

                        </div> :
                        <div className="flex-grow my-20">
                            <p className="text-center text-3xl">Cart is empty, go shopping and check items</p>
                            <Link to='/shop' className="p-3 my-5 bg-black text-center text-xl font-medium rounded-lg block md:w-1/4 w-1/2 m-auto text-white">Go Shopping</Link>
                        </div>
                }
                <MinFooter />
            </div>

        </>
    )
}

export default CheckoutCart
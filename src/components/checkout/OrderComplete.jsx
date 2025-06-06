import { useContext } from "react"
import { Link } from "react-router-dom"
import { Cartcontext } from "../../context/CartContext"
import { OrderContext } from "../../context/OrderDetailContext"

function OrderComplete() {
    const {resetCart}=useContext(Cartcontext)
    const {orderNum,orderTotal,paymentMethod,orderDate,orders}=useContext(OrderContext)
    console.log(orders)
    return (
        <>
            <div className=" text-center lg:w-3/5 m-auto w-full shadow-lg mt-5 ">
                <div className="flex flex-col gap-3">
                    <p className="font-medium text-zinc-400 text-3xl">Thank you! 🎉</p>
                    <p className="font-medium text-5xl">Your order has been <br /> received</p>
                </div>
                <div className="flex flex-col gap-2 mt-10 font-medium">
                    <div className="flex justify-between lg:w-1/3 w-3/4 m-auto">
                        <p className="text-zinc-400">order code:</p>
                        <p className="">{orderNum}</p>
                    </div>
                    <div className="flex justify-between lg:w-1/3 w-3/4  m-auto">
                        <p className="text-zinc-400">Date:</p>
                        <p className="">{orderDate}</p>
                    </div>
                    <div className="flex justify-between lg:w-1/3 w-3/4 m-auto">
                        <p className="text-zinc-400">Total:</p>
                        <p className="">{orderTotal}</p>
                    </div>
                    <div className="flex justify-between lg:w-1/3 w-3/4  m-auto">
                        <p className="text-zinc-400">Payment method:</p>
                        <p className="">{paymentMethod}</p>
                    </div>
                </div>
                <Link to='/home' onClick={()=>resetCart()} className='inline-block my-5 p-3 text-white bg-black rounded-lg text-center w-1/2 mx-auto my-8'>Go Home</Link>
            </div>
        </>
    )
}

export default OrderComplete
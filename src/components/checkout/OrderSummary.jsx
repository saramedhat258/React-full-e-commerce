import { useContext } from "react"
import { Cartcontext } from "../../context/CartContext"
import CartCard from "../cart/CartCard"

function OrderSummary() {
    const {cartPro,addedPrice,subtotal_total}=useContext(Cartcontext)
    const { subtotal, total } = subtotal_total()

    return (
        <div className="p-2">
            <p className="text-2xl font-medium my-3">Order summary</p>
            {
                cartPro.map(item =>
                    <div key={`${item?.compositeKey}`}>
                        <CartCard cartpro={item} remove={false} />
                    </div>
                )
            }
            <div>
                <div className="flex justify-between">
                    <p>Shipping</p>
                    <p className="font-medium">{addedPrice===0?'Free':`$${addedPrice}`}</p>
                </div>
                <hr className="my-3"/>
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p className="font-medium">${subtotal}</p>
                </div>
                <hr className="my-3"/>
                <div className="flex justify-between font-medium text-xl">
                    <p>Total</p>
                    <p>${total}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
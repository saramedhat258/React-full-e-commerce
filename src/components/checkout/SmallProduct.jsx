import { useContext } from "react"
import { Cartcontext } from "../../context/CartContext"
import CartCard from "../cart/CartCard"
function SmallProduct() {
    const {cartPro}=useContext(Cartcontext)
    return (
        <>
            <p className="text-xl font-medium">Product</p>
            <hr className="my-2 border-gray-400 border-[1px]"/>
            {
                cartPro.map(item =>
                    <div key={`${item?.compositeKey}`}>
                        <CartCard cartpro={item} />
                    </div>
                )
            }
        </>
    )
}

export default SmallProduct
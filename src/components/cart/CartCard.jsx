/* eslint-disable react/prop-types */
import { XIcon, Plus, Minus } from "lucide-react"
import { useContext } from "react";
import { Cartcontext } from "../../context/CartContext";
function CartCard({ cartpro, remove = true }) {
    const imageSRC = cartpro?.product?.images?.length > 0 ? cartpro?.product?.images[0].secure_url : "";
    const { RemovePro, increseQun, decreseQun } = useContext(Cartcontext)
    console.log(cartpro)
    return (
        <>
            <div className="flex gap-5 items-center">
                <img src={imageSRC} alt="product at cart" className="w-24" />
                <div className="flex justify-between w-full">
                    <div className="flex flex-col gap-3 text-left">
                        <p className="font-medium">{cartpro?.product.name}</p>
                        {cartpro?.Color &&
                            <p className="text-gray-400 text-sm">color: {cartpro?.Color}</p>
                        }
                        <div className=" flex gap-2 p-1 rounded-md border-gray-300 border-2 items-center max-w-fit">
                            <Minus color="gray" className="w-4 cursor-pointer" onClick={() => decreseQun(cartpro)} />
                            <p className="font-medium">{cartpro?.quntity}</p>
                            <Plus color="gray" className="w-4 cursor-pointer" onClick={() => increseQun(cartpro)} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 text-right">
                        <p className="font-medium">{cartpro?.product?.price * cartpro?.quntity} $</p>
                        {
                            remove && <XIcon color="gray" className="w-8 ms-auto cursor-pointer" onClick={() => RemovePro(cartpro)} />
                        }
                    </div>
                </div>
            </div>
            <hr className="my-5" />
        </>
    )
}

export default CartCard
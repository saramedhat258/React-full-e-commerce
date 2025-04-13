
import {  XIcon, Minus, Plus } from "lucide-react"
import { useContext } from "react"
import { Cartcontext } from "../../context/CartContext"
function ProductsCatDetails() {
    const { cartPro, increseQun, decreseQun, RemovePro } = useContext(Cartcontext)
    return (
        <>
            {/* header of cart */}
            <div>
                <div className="grid grid-cols-6 text-lg font-bold">
                    <p className="col-span-3">Product</p>
                    <p className="col-span-1 text-center">Quantity</p>
                    <p className="col-span-1 text-center">Price</p>
                    <p className="col-span-1 text-right">Subtotal</p>
                </div>
                <hr className="mt-4 border-[1px] border-slate-300" />
            </div>
            {/* details of cart */}
            {
                cartPro?.map(pro => (
                    <>
                        <div key={pro.compositeKey} className="grid grid-cols-6">
                            {/* product */}
                            <div className="col-span-3 flex items-center gap-3">
                                <img src={pro?.product?.images[0].secure_url} width={100} alt="product image" />
                                <div className="flex flex-col gap-2">
                                    <p className="font-medium">{pro?.product.name}</p>
                                    {pro?.Color &&
                                        <p className="text-gray-400 text-sm">color: {pro?.Color}</p>
                                    }
                                    <div className="flex gap-1 text-gray-500 font-medium"><XIcon color="gray" className="cursor-pointer" onClick={() => RemovePro(pro)} /> <p>Remove</p></div>
                                </div>
                            </div>
                            {/* quantity */}
                            <div className="col-span-1 flex gap-2 p-1 rounded-md border-gray-300 border-2 items-center max-w-fit max-h-fit m-auto">
                                <Minus color="gray" className="w-4 cursor-pointer" onClick={() => decreseQun(pro)} />
                                <p className="font-medium">{pro?.quntity}</p>
                                <Plus color="gray" className="w-4 cursor-pointer" onClick={() => increseQun(pro)} />
                            </div>
                            {/* price */}
                            <div className="col-span-1 text-center m-auto font-medium">
                                <p>${pro?.product?.price}</p>
                            </div>
                            {/* subtotal */}
                            <div className="col-span-1 text-right my-auto font-bold">
                                <p>${pro?.product?.price * pro?.quntity}</p>
                            </div>
                        </div>
                        <hr className="my-1" />
                    </>
                ))
            }
        </>
    )
}

export default ProductsCatDetails
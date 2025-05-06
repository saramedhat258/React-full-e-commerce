import { useContext } from "react"
import { WishContext } from "../../context/WishlistContext"
import { Cartcontext } from "../../context/CartContext"
import { XIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"


function Wishlist() {
    const { RemoveWish, wishlist } = useContext(WishContext)
    const { AddToCart } = useContext(Cartcontext)
    const navigate=useNavigate()
    return (
        <>
            <p className="text-2xl font-semibold mb-5 md:text-start text-center md:mt-0 mt-5">Your Wishlist</p>
            {
                wishlist.length === 0 ?
                    <p className="text-2xl md:my-28 my-20 rounded-lg capitalize font-medium text-center bg-gray-100 p-2 w-3/4 m-auto">
                        no products added to wishlist
                    </p>
                    : <>
                        <div className="flex flex-col gap-5">
                            <div className="md:flex hidden justify-between ">
                                <p className="text-zinc-400 w-1/2">Product</p>
                                <p className="text-zinc-400 w-1/4">Price</p>
                                <p className="text-zinc-400 w-1/4 ">Action</p>
                            </div>
                            <p className="text-zinc-400 w-1/2 inline-block md:hidden">Product</p>
                            <hr />
                            {
                                wishlist.map(wish => {
                                    const imageSRC = wish?.images?.length > 0 ? wish.images[0].secure_url : "";
                                    const defaultColor=wish?.variants?.length !== 0?wish.variants?.[0]?.options?.[0]?.value:null
                                    return(<>
                                        <div key={wish._id} className="md:flex hidden justify-between items-center">
                                            <div className="flex gap-2 items-center w-1/2">
                                                <XIcon color="gray" className="cursor-pointer" onClick={()=>RemoveWish(wish)} />
                                                <img src={imageSRC} alt="wishlist product" className="w-16" onClick={()=>navigate(`/productdetail/${wish._id}`)} />
                                                <p className="text-sm font-semibold">{wish.name}</p>
                                            </div>
                                            <p className="w-1/4">${wish.price}</p>
                                            <button onClick={() => AddToCart(wish,defaultColor)} className="p-2 bg-black text-white rounded-lg w-1/4">Add to cart</button>
                                        </div>
                                        <div key={`${wish._id}small`} className="flex flex-col md:hidden ">
                                            <div className="flex gap-2 items-center justify-start">
                                                <XIcon color="gray" className="cursor-pointer" onClick={()=>RemoveWish(wish)} />
                                                <img src={imageSRC} alt="wishlist product" className="w-16" onClick={()=>navigate(`/productdetail/${wish._id}`)} />
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-xs font-semibold">{wish.name}</p>
                                                    <p className="text-sm">${wish.price}</p>
                                                </div>
                                            </div>
                                            <button onClick={() => AddToCart(wish,defaultColor)} className="p-2 mt-3 w-full bg-black text-white rounded-lg">Add to cart</button>
                                            
                                        </div>
                                        <hr />
                                    </>)
                                })
                            }
                        </div>

                    </>
            }
        </>
    )
}

export default Wishlist
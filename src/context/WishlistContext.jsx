import { createContext, useState } from "react"
export const WishContext = createContext()

export const WishProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([])

    const AddTowish=(pro) => {
        setWishlist(prevwish => {
            const existProduct = wishlist?.find(wish => wish?._id === pro._id)
            if (!existProduct) {
                return [...prevwish,pro]
            }
            else {
                return prevwish?.filter(item => item?._id !== pro._id)
            }
            
        })
    }
    console.log(wishlist)
    const RemoveWish = (pro) => {
        setWishlist(wish => {
            return wish?.filter(item => item?._id !== pro._id)
        })
    }
    const values = {
        RemoveWish,
        AddTowish,
        wishlist
    }
    return (
        <WishContext.Provider value={values}>
            {children}
        </WishContext.Provider>
    )
}

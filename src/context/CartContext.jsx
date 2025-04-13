/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const Cartcontext = createContext()

export const CartProvider = ({ children }) => {
    const [cartPro, setCartPro] = useState([])

    /* add to cart function */
    const AddToCart = (pro, selectedColor = null) => {
        /* if it has a color it will have a unique composite key (id+color)  */
        const compositeKey = selectedColor ? `${pro?._id}-${selectedColor}` : pro?._id
        setCartPro(prevcart => {
            const existProduct = prevcart.find(cart =>
                cart?.compositeKey === compositeKey)
            if (!existProduct) {
                return [...prevcart, { product: pro, quntity: 1, Color: selectedColor, compositeKey }]
            }
            else {
                return prevcart.map(item => {
                    return item?.compositeKey === compositeKey ?
                        { ...item, quntity: item?.quntity + 1 }
                        : item
                })
            }
        })
    }

    /* increase quantity */
    const increseQun = (pro) => {
        const compositeKey = pro?.Color ? `${pro?.product?._id}-${pro?.Color}` : pro?.product?._id
        setCartPro(prevcart => {
            return prevcart.map(item =>(
                item?.compositeKey === compositeKey ?
                    { ...item, quntity: item?.quntity + 1 }
                    : item
            ))
        })
    }

    /* decrese quantity */
    const decreseQun = (pro) => {
        const compositeKey = pro?.Color ? `${pro?.product?._id}-${pro?.Color}` : pro?.product?._id
        setCartPro(prevcart => {
            const target = prevcart.find(item => item?.compositeKey === compositeKey);
            if (target?.quntity === 1) {
                return prevcart.filter(item => item?.compositeKey !== compositeKey)
            } else {
                return prevcart.map(item => 
                    item?.compositeKey === compositeKey ?
                        { ...item, quntity: item?.quntity - 1 }
                        : item
                )
            }
        })
    }

    const RemovePro = (pro) => {
        const compositeKey = pro?.Color ? `${pro?.product?._id}-${pro?.Color}` : pro?.product?._id
        setCartPro(prevcart => {
            return prevcart.filter(item => item?.compositeKey !== compositeKey)
        })
    }

    const cartValues = {
        cartPro,
        setCartPro,
        AddToCart,
        increseQun,
        decreseQun,
        RemovePro
    }
    return (
        <Cartcontext.Provider value={cartValues}>
            {children}
        </Cartcontext.Provider>
    )
}

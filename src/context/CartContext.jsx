/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
export const Cartcontext = createContext()

export const CartProvider = ({ children }) => {
    const [cartPro, setCartPro] = useState([])
    const [addedPrice, setAddedPrice] = useState(0)

    /* add to cart function */
    const AddToCart=(pro, selectedColor = null) => {
        /* if it has a color it will have a unique composite key (id+color)  */
        const compositeKey = selectedColor ? `${pro?._id}-${selectedColor}` : pro?._id
        setCartPro(prevcart => {
            const existProduct = cartPro.find(cart => cart?.compositeKey === compositeKey)
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
            return prevcart.map(item => (
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
    /* remove product from cart */
    const RemovePro = (pro) => {
        const compositeKey = pro?.Color ? `${pro?.product?._id}-${pro?.Color}` : pro?.product?._id
        setCartPro(prevcart => {
            return prevcart.filter(item => item?.compositeKey !== compositeKey)
        })
    }

    /*calculate total + subtotal */
    const subtotal_total = (discount = 0) => {
        const subtotal = cartPro.reduce((price, item) => {
            return price + item.product.price * item.quntity
        }, 0)
        const taxrate = 0.1
        const tax = taxrate * subtotal

        const total = (subtotal + tax + addedPrice) - discount
        return {
            subtotal: subtotal.toFixed(2),
            total: total.toFixed(2)
        }
    }
    /*reset cart */
    const resetCart = () => {
        setCartPro([])
    }


    const cartValues = {
        cartPro,
        setCartPro,
        AddToCart,
        increseQun,
        decreseQun,
        RemovePro,
        subtotal_total,
        addedPrice,
        setAddedPrice,
        resetCart
    }
    return (
        <Cartcontext.Provider value={cartValues}>
            {children}
        </Cartcontext.Provider>
    )
}

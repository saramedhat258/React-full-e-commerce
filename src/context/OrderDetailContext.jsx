import { createContext, useState, useContext } from "react"
import { Cartcontext } from "./CartContext"
export const OrderContext = createContext()

export const OrderDetailProvider = ({ children }) => {
    const [paymentMethod, setPaymentMethod] = useState('Pay by Card Credit')
    const [orderTotal, setOrderTotal] = useState(null)
    const [orderNum, setorderNum] = useState(null)
    const [orderDate, setorderDate] = useState(null)
    const [orders, setorders] = useState([])

    const { subtotal_total } = useContext(Cartcontext)
    const { total } = subtotal_total()
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    const handleClick = (setStep) => {
        const newOrder = {
            num: Date.now(),
            total: total,
            date: formattedDate,
        };
        setorders(prev => [...prev, newOrder])
        setorderNum(newOrder.num)
        setOrderTotal(newOrder.total)
        setorderDate(newOrder.date)
        setTimeout(() => {
            setStep(prev => prev + 1);
        }, 0);
    }


    const values = {
        paymentMethod, setPaymentMethod,
        orderTotal, setOrderTotal,
        orderNum, setorderNum,
        orders, setorders,
        orderDate, setorderDate,
        handleClick
    }
    return (
        <OrderContext.Provider value={values}>
            {children}
        </OrderContext.Provider>
    )
}

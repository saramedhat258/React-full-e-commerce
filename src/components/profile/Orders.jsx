import { useContext } from "react"
import { OrderContext } from "../../context/OrderDetailContext"

function Orders() {
    const orderHead = ['Number ID', 'Dates', 'Status', 'Price']
    const { orders } = useContext(OrderContext)

    return (
        <>
            <p className="text-2xl font-semibold mb-5 md:text-start text-center md:mt-0 mt-5">Orders History</p>
            {
                orders.length === 0 ?
                    <p className="text-2xl md:my-28 my-20 rounded-lg capitalize font-medium text-center bg-gray-100 p-2 w-3/4 m-auto">
                        no orders yet 
                    </p>
                    : <>
                        <div className="md:flex  flex-col gap-5 hidden">
                            <div className="flex justify-between">
                                {orderHead.map(o =>
                                    <p key={o} className="text-zinc-400">{o}</p>
                                )}
                            </div>
                            <hr />
                            {
                                orders.map(order =>
                                    <>
                                        <div key={order.num} className="flex justify-between">
                                            <p>{order.num}</p>
                                            <p>{order.date}</p>
                                            <p>Delivered</p>
                                            <p>{order.total}</p>
                                        </div>
                                        <hr />
                                    </>
                                )
                            }
                        </div>

                        <div className="flex md:hidden flex-col gap-5">
                            {orders.map(order => 
                                    <>
                                    <div key={order} className="flex flex-col gap-2">
                                        <div className="flex justify-between">
                                            <p className="text-zinc-400">Number ID</p>
                                            <p>{order.num}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-zinc-400">Date</p>
                                            <p>{order.date}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-zinc-400">Status</p>
                                            <p>Deliverd</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-zinc-400">Total</p>
                                            <p>{order.total}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    </>
                                    
                                
                            )
                            }
                        </div>

                    </>
            }
        </>
    )
}

export default Orders
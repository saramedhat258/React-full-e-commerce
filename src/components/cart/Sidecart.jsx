import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartCard from './CartCard';
import { Link } from 'react-router-dom';
import { Cartcontext } from '../../context/CartContext';
import { useContext } from 'react';

function Drawer() {
    const { cartPro,subtotal_total } = useContext(Cartcontext)
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    
    /*calc subtotal and total */
    const { subtotal, total } = subtotal_total()

    return (
        <>
            {isOpen && (
                <div 
                    className="fixed inset-0 z-30 bg-black bg-opacity-50"
                    onClick={toggleDrawer}
                />
            )}
            {/* Button to open drawer */}
            <button onClick={toggleDrawer}>
                <FontAwesomeIcon className="text-xl" icon={faCartShopping} />
            </button>
            {/* Drawer */}
            <div
                id="drawer-navigation"
                className={`fixed top-0 right-0 z-40 w-[350px] h-screen p-4 overflow-y-auto bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                tabIndex={-1}
                aria-labelledby="drawer-navigation-label"
            >
                <h5
                    id="drawer-navigation-label"
                    className="ms-10 text-left text-xl font-semibold dark:text-gray-400"
                >
                    Cart
                </h5>
                <button
                    type="button"
                    onClick={toggleDrawer}
                    aria-controls="drawer-navigation"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 left-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>

                <div className="py-4 overflow-y-auto h-[95%]">
                    <div className='flex flex-col h-full'>
                        <div className='flex-grow overflow-y-auto mb-10'>
                            {
                                cartPro.map(item =>
                                    <div key={`${item?.compositeKey}`}>
                                        <CartCard cartpro={item} />
                                    </div>
                                )
                            }
                        </div>
                        {cartPro.length !== 0 ?
                            <div className='mt-auto'>
                                <div className='flex justify-between'>
                                    <p>Subtotal</p>
                                    <p className='font-medium'>${subtotal}</p>
                                </div>
                                <hr className='my-5' />
                                <div className='flex justify-between text-xl font-medium'>
                                    <p>Total</p>
                                    <p>${total}</p>
                                </div>
                                <Link to='/checkout' className='inline-block my-5 w-full p-2 text-white bg-black rounded-lg'>Checkout</Link>
                                <Link to='/checkout' className='inline-block font-medium border-b-2 border-b-black pb-1 w-1/4 m-auto'>View Cart</Link>
                            </div> :
                            <div className="mt-auto">
                                <p className="text-center text-2xl">Cart is empty, go shopping and check items</p>
                                <Link to='/shop' className="p-3 my-5 bg-black text-center text-lg font-medium rounded-lg block w-3/4 m-auto text-white">Go Shopping</Link>
                            </div>
                        }
                    </div >
                </div>
            </div>
        </>
    );
}

export default Drawer;
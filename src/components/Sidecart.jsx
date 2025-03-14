import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function Drawer() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Button to open drawer */}
            <button onClick={toggleDrawer}>
                <FontAwesomeIcon className="text-xl" icon={faCartShopping} />
            </button>
            {/* Drawer */}
            <div
                id="drawer-navigation"
                className={`fixed top-0 right-0 z-40 w-80 h-screen p-4 overflow-y-auto bg-white dark:bg-gray-800 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                tabIndex={-1}
                aria-labelledby="drawer-navigation-label"
            >
                <h5
                    id="drawer-navigation-label"
                    className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
                >
                    cart
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
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white">
                                Shop
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white">
                                Product
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Drawer;

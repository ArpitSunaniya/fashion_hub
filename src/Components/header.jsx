import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import CartContext from './Store_Cart/CartContext';

const Header = () => {
    const { cartItems } = useContext(CartContext);
    const activeClasses = ({ isActive }) =>
        `block py-2 px-3 md:p-0 rounded transition-colors duration-200 ${isActive ? 'text-blue-700 font-semibold' : 'text-gray-900 hover:text-blue-700'
        }`;
    return (
        <>

            <nav className="fixed top-0 left-0 w-full z-50 bg-[#EEDDCC] shadow-md">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4 mx-6">
                    <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="text-black self-center text-4xl font-bold whitespace-nowrap  ">Fashion</span>
                    </NavLink>

                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <NavLink to="/ShoppingCart" className="relative flex items-center mx-4">
                            <FaCartPlus size={24} />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                                    {cartItems.length}
                                </span>
                            )}
                        </NavLink>
                        <button type="button" className="text-black border-solid border-2 border-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                            LOGIN
                        </button>
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#EEDDCC] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#EEDDCC] text-black dark:border-gray-700">
                            <li>
                                <NavLink to="/men" className={activeClasses}>MEN</NavLink>
                            </li>
                            <li>
                                <NavLink to="/women" className={activeClasses}>WOMEN</NavLink>
                            </li>
                            <li>
                                <NavLink to="/kids" className={activeClasses}>KIDS</NavLink>
                            </li>
                            <li>
                                <NavLink to="/collection" className={activeClasses}>COLLECTION</NavLink>
                            </li>
                            <li>
                                <NavLink to="/trends" className={activeClasses}>TRENDS</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
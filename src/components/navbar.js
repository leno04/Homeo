import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <div class="md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <ul class="flex flex-row justify-center items-center lg:gap-x-6 md:gap-x-4 gap-x-2">
                <li>
                    <a href="#" class="block p-4 font-medium py-2 px-3 text-base md:hover:text-[#2BA78F] md:p-0 md:dark:text-blue-500">Sign Up</a>
                </li>
                <li>
                    <button type="button" class="text-sm bg-transparent border-solid border-2 focus:outline-none text-[#2BA78F] border-[#2BA78F] font-bold rounded-full px-6 py-3 hover:bg-[#2BA78F] hover:text-white text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LOGIN</button>
                </li>
                <li>
                    <button 
                    data-collapse-toggle="navbar-sticky" 
                    type="button" 
                    class="inline-flex items-center p-2 w-10 h-10 justify-center bg-transparent text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#80cabc] focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                    aria-controls="navbar-sticky" 
                    aria-expanded={isMenuOpen}
                    onClick={handleToggleMenu}
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </li>
            </ul>            
        </div>
        
        <div className={`items-center justify-between ${isMenuOpen ? 'absolute top-14 right-0 w-2/3 block' : 'hidden'} md:flex md:w-auto md:order-1`} style={{zIndex:1000}} id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-[#2BA78F] md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#2BA78F] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#2BA78F] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#2BA78F] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
            </ul>
        </div>
        </div>
        </nav>

    );
}
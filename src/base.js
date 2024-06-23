import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import image from "./images/image.jpg";

const custom_shadow = {
    boxShadow: '1px 1px 100px rgba(36, 139, 119, 0.5)'
}

// const ScrollSpyExample = () => {
//     const [activeSection, setActiveSection] = useState(null);
  
//     useEffect(() => {
//       const handleScroll = () => {
//         const scrollPosition = window.scrollY;
  
//         // Adjust these values according to your layout
//         const section1Offset = document.getElementById('section1').offsetTop;
//         const section2Offset = document.getElementById('section2').offsetTop;
//         const section3Offset = document.getElementById('section3').offsetTop;
//         const section4Offset = document.getElementById('section4').offsetTop;
  
//         if (scrollPosition >= section1Offset && scrollPosition < section2Offset) {
//           setActiveSection('section1');
//         } else if (scrollPosition >= section2Offset) {
//           setActiveSection('section2');
//         } else {
//           setActiveSection(null);
//         }
//       };
  
//       window.addEventListener('scroll', handleScroll);
  
//       // Cleanup the event listener on component unmount
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }, []);
// }


export default function Base(){
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
    setIsHovered(true);
    };

    const handleMouseLeave = () => {
    setIsHovered(false);
    };
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const rect = element.getBoundingClientRect();
            
            // Calculate the scroll position to align with the top of the section
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const offset = rect.top + scrollTop;
    
            // Scroll to the calculated offset
            window.scrollTo({
                top: offset,
                behavior: "smooth"
            });
        }
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return(
        <div class="relative">
            <div class="h-[100vh] mb-12 w-full">
            <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 relative">
                <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white sm:text-2xl landscape:text-lg">Flowbite</span>
                </a>
                <div class="md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <ul class="flex flex-row justify-center items-center lg:gap-x-6 md:gap-x-4 gap-x-2">
                        <li class="hidden sm:inline-flex">
                            <a href="#" class="block p-4 font-medium py-2 px-3 text-base md:hover:text-[#2BA78F] md:p-0 md:dark:text-blue-500">Sign Up</a>
                        </li>
                        <li>
                            <button type="button" class="text-sm bg-transparent border-solid border-2 focus:outline-none text-[#2BA78F] border-[#2BA78F] font-bold rounded-full px-4 py-2 hover:bg-[#2BA78F] sm:px-6 sm:py-3 hover:text-white text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 landscape:py-2">LOGIN</button>
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
                
                <div className={`items-center justify-between ${isMenuOpen ? 'absolute top-12 right-4 w-1/2 xs:w-1/3 sm:w-1/3 block':'hidden'} md:flex md:w-auto md:order-1`} style={{zIndex:1000}} id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-[#d5ede9] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <button class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#2BA78F] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={() => scrollToSection("section1")} aria-current="page">Home</button>
                    </li>
                    <li>
                        <button class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#2BA78F] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={() => scrollToSection("section2")}>About</button>
                    </li>
                    <li>
                        <button class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#2BA78F] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={() => scrollToSection("section3")}>Services</button>
                    </li>
                    <li>
                        <button class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#2BA78F] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={() => scrollToSection("section4")}>Contact</button>
                    </li>
                    </ul>
                </div>
                </div>
                </nav>

            <div id="section1" class="absolute top-16 flex flex-col w-full gap-y-5 lg:gap-y-3 justify-center items-center md:top-18 md:mt-6 lg:mt-8">
                {/* <span id="section1"></span> */}
                <h1 class="w-4/5 font-custom text-3xl sm:w-5/6 md:w-3/4 lg:w-2/3 sm:text-4xl md:text-[2.75rem] text-center">
                    <span class="hidden sm:inline">
                        <span class="text-[#2BA78F]">Search for Doctors</span>, book appointments conveniently
                    </span>
                    <span class="sm:hidden">
                        <span class="text-[#2BA78F]">Book</span> Appointments conveniently
                    </span>
                </h1>
                <p class="w-1/2 text-center hidden sm:inline ">Lorem ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                <button 
                type="button" 
                class={`text-base font-custom bg-[#2BA78F] text-white rounded-full px-4 py-2 hover:bg-[#228672] hover:${custom_shadow} hover:shadow-[#228672] sm:px-6 sm:py-3 hover:text-white text-center`} 
                onClick={() => scrollToSection("section5")}
                style = {{boxShadow: isHovered ? '1px 1px 100px rgba(36, 139, 119, 0.5)' : '1px 1px 0 rgba(36, 139, 119, 0)',
                    // transition: 'box-shadow 0.5s ease-in-out',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >EXPLORE</button>
                {/* <div class="w-2/3 h-[45vh] flex flex-col relative items-start mt-[5vh] md:mt-[7vh] lg:mt-[10vh]">
                    <div class="h-full aspect-square bg-[#2BA78F] z-50 absolute top-0 left-0 z-50 rounded-[2rem]"></div>
                    <div class="sm:block w-full h-[90vh] sm:h-[40vh] bg-[#AADCD2] rounded-[2rem] my-[2.5vh]"></div>
                </div> */}
                {/* <div class="w-2/3 h-[90vh] sm:h-[45vh] flex flex-col sm:flex-row items-center my-[4vh] md:my-[6vh] lg:my-[10vh]]">
                    <div class="h-[45vh] aspect-square bg-[#2BA78F] rounded-[2rem]"></div>
                    <div class="h-[40vh] w-[4/5] sm:w-[2/3] bg-[#AADCD2] rounded-[2rem]"></div>
                </div> */}
                <div class="relative w-[45vh] lg:w-2/3 h-[100vh] lg:h-[50vh] flex flex-col lg:flex-row items-center justify-center mt-[1.5vh]">
                    <div class="w-full aspect-[1/1] lg:w-[50vh] lg:h-[50vh] rounded-[2rem] bg-[#AADCD2] flex items-center justify-center">
                        <img class="aspect-[1/1] w-11/12 lg:h-11/12 rounded-[2rem]" src={`${image}`}/>
                    </div>
                    <div class="w-5/6 lg:flex-1 h-[55vh] lg:h-5/6 rectangle rounded-b-[2rem] lg:rounded-none lg:rounded-r-[2rem] bg-[#AADCD2]"></div>
                </div>
                    
            </div>
            </div>

            <div id="section5"></div>
            <div id="section2"></div>
            <div id="section3"></div>
            <div id="section4"></div> 
        </div>
    );
}
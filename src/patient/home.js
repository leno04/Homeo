import React, { useState } from "react";
import Navbar from "../components/navbar";
import image from "../images/image.jpg";

const custom_shadow = {
  boxShadow: "1px 1px 100px rgba(36, 139, 119, 0.5)",
};

export default function PatientHomePage() {
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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div className="h-[100vh] mb-12 w-full">
        <Navbar />

        <div
          id="section1"
          className="absolute top-16 flex flex-col w-full gap-y-5 lg:gap-y-3 justify-center items-center md:top-18 md:mt-6 lg:mt-8"
        >
          <h1 className="w-4/5 font-custom text-3xl sm:w-5/6 md:w-3/4 lg:w-2/3 sm:text-4xl md:text-[2.75rem] text-center">
            <span className="hidden sm:inline">
              <span className="text-[#2BA78F]">Search for Doctors</span>, book
              appointments conveniently
            </span>
            <span className="sm:hidden">
              <span className="text-[#2BA78F]">Book</span> Appointments
              conveniently
            </span>
          </h1>
          <p className="w-1/2 text-center hidden sm:inline">
            Lorem ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
          <button
            type="button"
            className={`text-base font-custom bg-[#2BA78F] text-white rounded-full px-4 py-2 hover:bg-[#228672] hover:${custom_shadow} hover:shadow-[#228672] sm:px-6 sm:py-3 hover:text-white text-center`}
            onClick={() => scrollToSection("section5")}
            style={{
              boxShadow: isHovered
                ? "1px 1px 100px rgba(36, 139, 119, 0.5)"
                : "1px 1px 0 rgba(36, 139, 119, 0)",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            EXPLORE
          </button>

          <div className="relative w-[45vh] lg:w-2/3 h-[100vh] lg:h-[50vh] flex flex-col lg:flex-row items-center justify-center mt-[1.5vh]">
            <div className="w-full aspect-[1/1] lg:w-[50vh] lg:h-[50vh] rounded-[2rem] bg-[#AADCD2] flex items-center justify-center">
              <img
                className="aspect-[1/1] w-11/12 lg:h-11/12 rounded-[2rem]"
                src={`${image}`}
                alt="Sample"
              />
            </div>
            <div className="w-5/6 lg:flex-1 h-[55vh] lg:h-5/6 rectangle rounded-b-[2rem] lg:rounded-none lg:rounded-r-[2rem] bg-[#AADCD2]"></div>
          </div>
        </div>
      </div>

      <div
        id="section5"
        className="flex flex-col items-center justify-center mt-12"
      >
        <h1 className="w-4/5 font-custom text-3xl sm:w-5/6 md:w-3/4 lg:w-2/3 sm:text-4xl md:text-[2.75rem] text-center">
          qwertyuiop sdfghjk
        </h1>
        <div className="w-full"></div>
      </div>
      <div id="section2"></div>
      <div id="section3"></div>
      <div id="section4"></div>
    </div>
  );
}

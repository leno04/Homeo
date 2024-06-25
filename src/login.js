// import React, { useState } from "react";

// export default function Login() {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [showOtpField, setShowOtpField] = useState(false);
//   const [resendDisabled, setResendDisabled] = useState(false);

//   const handlePhoneNumberSubmit = (event) => {
//     event.preventDefault();
//     // Simulate sending OTP request to backend (async operation)
//     setResendDisabled(true); // Disable resend button temporarily
//     setTimeout(() => {
//       setShowOtpField(true); // Show OTP input field after delay
//     }, 2000); // Simulating 2 seconds delay for OTP request
//   };

//   const handleOtpSubmit = (event) => {
//     event.preventDefault();
//     // Handle OTP submission logic here, e.g., verify OTP with backend
//     console.log("Form submitted with:", phoneNumber, otp);
//     // Reset form fields after submission if needed
//     setOtp("");
//   };

//   const handleResendOtp = () => {
//     // Handle resend OTP logic here, e.g., send request to backend for new OTP
//     setResendDisabled(true); // Disable resend button temporarily
//     setTimeout(() => {
//       setOtp(""); // Clear previous OTP if any
//       setResendDisabled(false); // Enable resend button
//     }, 2000); // Simulating 2 seconds delay for OTP request
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     if (name === "phoneNumber") {
//       setPhoneNumber(value);
//     } else if (name === "otp") {
//       setOtp(value);
//     }
//   };

//   return (
//     <div className="h-100vh lg:h-[100vh] w-full flex flex-row justify-center items-center relative">
//       <div>
//         <a
//           href="https://flowbite.com/"
//           className="flex items-center space-x-3 rtl:space-x-reverse absolute top-5 left-10 z-10"
//         >
//           <img
//             src="https://flowbite.com/docs/images/logo.svg"
//             className="h-6 md:h-8 "
//             alt="Flowbite Logo"
//           />
//           <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white sm:text-2xl landscape:text-lg">
//             Flowbite
//           </span>
//         </a>
//       </div>
//       <div className="flex flex-col-reverse lg:flex-row items-center justify-center h-[100vh] md:h-full lg:h-[80vh] w-full lg:w-5/6 lg:bg-[#aadcd2] lg:rounded-[2rem] md:mt-12 lg:mt-0 lg:shadow-2xl">
//         <div className="hidden md:block h-1/2 lg:h-[60vh] w-full lg:h-full lg:w-5/12"></div>
//         {/* Partition */}
//         <div className="hidden lg:block border-s border-[#2BA78F] h-[60vh]"></div>
//         {/* Partition */}
//         <div className="h-full md:h-[60vh] w-3/4 lg:w-7/12 lg:h-full lg:w-1/2 flex flex-col justify-center md:p-12 gap-y-15 ">
//           <div className="w-full">
//             <h1 className="font-custom text-[2rem] lg:text-2xl text-[#0a2822]">
//               Login
//             </h1>
//             <hr className="w-1/6 border-t-4 border-[#2BA78F] mb-4" />
//             <div className="flex w-full flex-col gap-y-2 items-start justify-center py-3">
//               <form
//                 onSubmit={handlePhoneNumberSubmit}
//                 className="w-full flex flex-col justify-center items-center gap-y-6 py-3 lg:py-8"
//               >
//                 <div className="w-full flex flex-row flex-wrap justify-center gap-4 lg:gap-x-8">
//                   <input
//                     id="phoneNumberInput"
//                     type="tel"
//                     name="phoneNumber"
//                     className="w-11/24 md:w-5/12 px-4 py-3 mb-4 text-md border rounded-xl"
//                     placeholder="Enter your phone number"
//                     value={phoneNumber}
//                     onChange={handleChange}
//                     required
//                     disabled={showOtpField}
//                   />
//                 </div>
//                 {!showOtpField && (
//                   <button
//                     type="submit"
//                     className="inline font-semibold py-3 px-6 text-lg bg-[#228672] text-white rounded-full hover:bg-[#1a6456] focus:outline-none"
//                   >
//                     Submit
//                   </button>
//                 )}
//               </form>
//               {showOtpField && (
//                 <form
//                   onSubmit={handleOtpSubmit}
//                   className="w-full flex flex-col justify-center items-center gap-y-6 py-3 lg:py-8"
//                 >
//                   <div className="w-full flex flex-row flex-wrap justify-center gap-4 lg:gap-x-8">
//                     <input
//                       id="otpInput"
//                       type="text"
//                       name="otp"
//                       className="w-11/24 md:w-5/12 px-4 py-3 mb-4 text-md border rounded-xl"
//                       placeholder="Enter OTP"
//                       value={otp}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="flex justify-center items-center gap-4">
//                     <button
//                       type="submit"
//                       className="inline font-semibold py-3 px-6 text-lg bg-[#228672] text-white rounded-full hover:bg-[#1a6456] focus:outline-none"
//                     >
//                       Submit
//                     </button>
//                     <button
//                       type="button"
//                       onClick={handleResendOtp}
//                       className={`inline font-semibold py-3 px-6 text-lg bg-[#228672] text-white rounded-full hover:bg-[#1a6456] focus:outline-none ${
//                         resendDisabled && "opacity-50 cursor-not-allowed"
//                       }`}
//                       disabled={resendDisabled}
//                     >
//                       Resend OTP
//                     </button>
//                   </div>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "./images/doctorPatient.jpg";

export default function Login() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Handle login submission logic here, e.g., verify credentials with backend
    console.log("Form submitted with:", { name, phoneNumber, password });
    // Reset form fields after submission if needed
    setName("");
    setPhoneNumber("");
    setPassword("");
    // Redirect to desired page after successful login
    navigate("/patient/home/PatientHome"); // Example redirect to '/dashboard'
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "phoneNumber") {
      setPhoneNumber(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="h-screen lg:h-screen bg-[#eef8f6] w-full flex flex-row justify-center items-center relative">
      <div>
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse absolute top-5 left-10 z-10"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 md:h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white sm:text-2xl landscape:text-lg">
            Website
          </span>
        </Link>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center h-screen md:h-full lg:h-[80vh] w-full lg:w-5/6 lg:bg-[#aadcd2] lg:rounded-[2rem] md:mt-12 lg:mt-0 lg:shadow-2xl overflow-hidden">
        <div className="hidden md:block h-1/2 lg:h-full w-full lg:w-5/12">
          <img className="h-full w-full" src={`${img}`}/>
        </div>
        {/* Partition */}
        <div className="hidden lg:block border-s border-[#2BA78F] h-[60vh]"></div>
        {/* Partition */}
        <div className="h-full md:h-[60vh] w-3/4 lg:w-7/12 lg:h-full lg:w-1/2 flex flex-col justify-center md:p-12 gap-y-15">
          <div className="w-full">
            <h1 className="font-custom text-[2rem] lg:text-2xl text-[#0a2822]">
              Login
            </h1>
            <hr className="w-1/12 border-t-4 border-[#2BA78F] mb-4" />
            <p className="text-md text-[#0a2822]">
              Welcome Back, Please enter your details to login{" "}
            </p>
          </div>
          <div className="p-2 h-[60vh] lg:p-4 md:h-5/6 w-full lg:h-2/3 mt-4 md:mt-0 shadow-md rounded-lg lg:rounded-md w-full flex-1 bg-[#aadcd2] flex flex-col justify-center">
            <form
              onSubmit={handleLoginSubmit}
              className="w-full flex flex-col justify-center items-center gap-y-6 py-3 lg:py-8"
            >
              <div className="w-full flex flex-row flex-wrap justify-center gap-4 lg:gap-x-8">
                <input
                  id="nameInput"
                  type="text"
                  name="name"
                  className="w-full md:w-5/12 px-4 py-3 mb-4 text-md border rounded-xl"
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleChange}
                  required
                />
                <input
                  id="phoneNumberInput"
                  type="tel"
                  name="phoneNumber"
                  className="w-full md:w-5/12 px-4 py-3 mb-4 text-md border rounded-xl"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full flex flex-row flex-wrap justify-center gap-4 lg:gap-x-8">
                <input
                  id="passwordInput"
                  type="password"
                  name="password"
                  className="w-full md:w-5/12 px-4 py-3 mb-4 text-md border rounded-xl"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="inline font-semibold py-3 px-6 text-lg bg-[#228672] text-white rounded-full hover:bg-[#1a6456] focus:outline-none"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex flex-row justify-end px-4 py-2">
            <p className="text-md items-center justify-center">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-[#1a6456] underline hover:text-[#1a6456]"
              >
                Create a new account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
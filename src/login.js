import React, { useState } from "react";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);

  const handlePhoneNumberSubmit = (event) => {
    event.preventDefault();
    // Simulate sending OTP request to backend (async operation)
    setResendDisabled(true); // Disable resend button temporarily
    setTimeout(() => {
      setShowOtpField(true); // Show OTP input field after delay
    }, 2000); // Simulating 2 seconds delay for OTP request
  };

  const handleOtpSubmit = (event) => {
    event.preventDefault();
    // Handle OTP submission logic here, e.g., verify OTP with backend
    console.log("Form submitted with:", phoneNumber, otp);
    // Reset form fields after submission if needed
    setOtp("");
  };

  const handleResendOtp = () => {
    // Handle resend OTP logic here, e.g., send request to backend for new OTP
    setResendDisabled(true); // Disable resend button temporarily
    setTimeout(() => {
      setOtp(""); // Clear previous OTP if any
      setResendDisabled(false); // Enable resend button
    }, 2000); // Simulating 2 seconds delay for OTP request
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "phoneNumber") {
      setPhoneNumber(value);
    } else if (name === "otp") {
      setOtp(value);
    }
  };

  return (
    <div className="h-100vh lg:h-[100vh] w-full flex flex-row justify-center items-center relative">
      <div>
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse absolute top-5 left-10 z-10"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 md:h-8 "
            alt="Flowbite Logo"
          />
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white sm:text-2xl landscape:text-lg">
            Flowbite
          </span>
        </a>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center h-[100vh] md:h-full lg:h-[80vh] w-full lg:w-5/6 lg:bg-[#aadcd2] lg:rounded-[2rem] md:mt-12 lg:mt-0 lg:shadow-2xl">
        <div className="hidden md:block h-1/2 lg:h-[60vh] w-full lg:h-full lg:w-5/12"></div>
        {/* Partition */}
        <div className="hidden lg:block border-s border-[#2BA78F] h-[60vh]"></div>
        {/* Partition */}
        <div className="h-full md:h-[60vh] w-3/4 lg:w-7/12 lg:h-full lg:w-1/2 flex flex-col justify-center md:p-12 gap-y-15 ">
          <div className="w-full">
            <h1 className="font-custom text-[2rem] lg:text-2xl text-[#0a2822]">
              Login
            </h1>
            <hr className="w-1/6 border-t-4 border-[#2BA78F] mb-4" />
            <div className="flex w-full flex-col gap-y-2 items-start justify-center py-3">
              <form
                onSubmit={handlePhoneNumberSubmit}
                className="w-full flex flex-col justify-center items-center gap-y-6 py-3 lg:py-8"
              >
                <div className="w-full flex flex-row flex-wrap justify-center gap-4 lg:gap-x-8">
                  <input
                    id="phoneNumberInput"
                    type="tel"
                    name="phoneNumber"
                    className="w-11/24 md:w-5/12 px-4 py-3 mb-4 text-md border rounded-xl"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={handleChange}
                    required
                    disabled={showOtpField}
                  />
                </div>
                {!showOtpField && (
                  <button
                    type="submit"
                    className="inline font-semibold py-3 px-6 text-lg bg-[#228672] text-white rounded-full hover:bg-[#1a6456] focus:outline-none"
                  >
                    Submit
                  </button>
                )}
              </form>
              {showOtpField && (
                <form
                  onSubmit={handleOtpSubmit}
                  className="w-full flex flex-col justify-center items-center gap-y-6 py-3 lg:py-8"
                >
                  <div className="w-full flex flex-row flex-wrap justify-center gap-4 lg:gap-x-8">
                    <input
                      id="otpInput"
                      type="text"
                      name="otp"
                      className="w-11/24 md:w-5/12 px-4 py-3 mb-4 text-md border rounded-xl"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <button
                      type="submit"
                      className="inline font-semibold py-3 px-6 text-lg bg-[#228672] text-white rounded-full hover:bg-[#1a6456] focus:outline-none"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      className={`inline font-semibold py-3 px-6 text-lg bg-[#228672] text-white rounded-full hover:bg-[#1a6456] focus:outline-none ${
                        resendDisabled && "opacity-50 cursor-not-allowed"
                      }`}
                      disabled={resendDisabled}
                    >
                      Resend OTP
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function PatientLogin() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const onChange = (event) => {
    if (event.target) {
      setCredentials({
        ...credentials,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., sending data to backend, storing in state, etc.
    console.log("Form submitted with:", credentials);
    // Reset form fields after submission if needed
    // setCredentials({
    //     email: '',
    //     password: '',
    // });
  };

  return (
    <form
      className="w-full flex flex-col justify-center items-center gap-y-6 py-3 lg:py-8"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex flex-row flex-wrap justify-center gap-4 lg:gap-x-8">
        <input
          id="emailInput"
          type="email"
          name="email"
          className="w-11/24 md:w-5/12 px-4 py-3 mb-4 text-md border rounded-xl"
          placeholder="Enter your email"
          value={credentials.email}
          onChange={onChange}
          required
        />
        <input
          id="passwordInput"
          type="password"
          name="password"
          className="w-11/24 md:w-5/12 px-4 py-3 mb-4 text-md border rounded-xl"
          placeholder="Enter your password"
          value={credentials.password}
          onChange={onChange}
          required
        />
      </div>
      <button
        type="submit"
        className="inline font-semibold py-3 px-6 text-lg bg-[#228672] text-white rounded-full hover:bg-[#1a6456] focus:outline-none"
      >
        Login
      </button>
    </form>
  );
}

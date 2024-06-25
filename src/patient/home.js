import Navbar from '../components/navbar.js';
import React from 'react'

export default function () {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-teal-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to the Service!</h1>
          <p className="mb-4">Book Appointment</p>
          <button className="bg-teal-500 text-white px-4 py-2 rounded">NOW</button>
        </div>
      </div>
    </div>
  )
}

    
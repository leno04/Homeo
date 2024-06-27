import React from 'react';

const AppointmentBooking = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center">
      
      <main className="w-full max-w-3xl p-4 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold">Dr. Jennifer Lee, MD</h1>
        <p className="text-[#2BA78F]">Family Medicine</p>
        <p className="text-[#2BA78F] underline mt-2 mb-6 cursor-pointer">Next available appointment in 4 days</p>

        <div>
          <h2 className="text-lg font-semibold mb-4">Select a time</h2>
          <p className="mb-4">Dr. Jennifer Lee, MD is available for online booking on the following dates and times:</p>
          <div className="flex justify-between border-b-2 mb-4">
            <button className="pb-2 border-b-2 border-[#2BA78F]">Thursday, Sep 30</button>
            <button className="pb-2">Friday, Oct 1</button>
            <button className="pb-2">Saturday, Oct 2</button>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Morning</h3>
              <div className="flex flex-wrap gap-2">
                <button className="bg-gray-200 px-4 py-2 rounded">9:00 AM - 9:15 AM</button>
                <button className="bg-gray-200 px-4 py-2 rounded">9:15 AM - 9:30</button>
                <button className="bg-gray-200 px-4 py-2 rounded">9:30 AM</button>
                <button className="bg-gray-200 px-4 py-2 rounded">9:45 AM</button>
                <button className="bg-gray-200 px-4 py-2 rounded">10:00 AM</button>
                <button className="bg-gray-200 px-4 py-2 rounded">10:15 AM</button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Afternoon</h3>
              <div className="flex flex-wrap gap-2">
                <button className="bg-gray-200 px-4 py-2 rounded">12:00 PM</button>
                <button className="bg-gray-200 px-4 py-2 rounded">12:15 PM</button>
                <button className="bg-gray-200 px-4 py-2 rounded">12:30 PM</button>
                <button className="bg-gray-200 px-4 py-2 rounded">12:45 PM</button>
                <button className="bg-gray-200 px-4 py-2 rounded">1:00 PM</button>
                <button className="bg-gray-200 px-4 py-2 rounded">1:15 PM</button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button className="w-full bg-[#2BA78F] text-white px-4 py-2 rounded">Book an appointment</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppointmentBooking;
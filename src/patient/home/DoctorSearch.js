import React from 'react';
import image from "C:\\Users\\DELL\\OneDrive\\Desktop\\tailwind2\\Homeo\\src\\images\\image.jpg";

const specialties = [
  'Primary Care Doctor', 'OB-GYN', 'Dermatologist', 'Orthopedic Surgeon', 'Cardiologist', 'Psychiatrist'
];

const insurances = [
  'Blue Cross Blue Shield', 'Aetna', 'Cigna', 'United Healthcare', 'Medicare', 'Humana'
];

const doctors = [
  { name: 'Dr. Sarah Thompson', specialty: 'General Practitioner', image: image },
  { name: 'Dr. Michael Lee', specialty: 'Dermatologist', image: image },
  { name: 'Dr. Emily Davis', specialty: 'Orthopedic Surgeon', image: image },
  { name: 'Dr. Christopher Johnson', specialty: 'Cardiologist', image: image },
];

const DoctorSearch = () => {
  return (
    <div className="min-h-[90vh] bg-gray-50">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">Find a doctor</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Find a doctor who meets your unique needs. Use our search tools to find the right doctor for you.</p>
            <input type="text" placeholder="Search by name, specialty, or condition" className="mt-4 py-2 px-4 w-full rounded border border-gray-300" />
          </div>
          <div className="px-4 py-5 sm:px-6">
            <h4 className="text-lg leading-6 font-medium text-gray-900">Popular specialties</h4>
            <div className="mt-2 flex flex-row flex-wrap space-x-2">
              {specialties.map((specialty, index) => (
                <span key={index} className="bg-[#aadcd2] text-gray-700 px-3 py-1 mb-2 rounded-full text-sm">{specialty}</span>
              ))}
            </div>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <h4 className="text-lg leading-6 font-medium text-gray-900">Popular insurance</h4>
            <div className="mt-2 flex flex-wrap space-x-2">
              {insurances.map((insurance, index) => (
                <span key={index} className="bg-[#aadcd2] text-gray-700 mb-2 px-3 py-1 rounded-full text-sm">{insurance}</span>
              ))}
            </div>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <h4 className="text-lg leading-6 font-medium text-gray-900">Nearby doctors</h4>
            <div className="mt-2">
              {doctors.map((doctor, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <img src={doctor.image} alt={doctor.name} className="h-10 w-10 rounded-full mr-4" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{doctor.name}</p>
                      <p className="text-sm text-gray-500">{doctor.specialty}</p>
                    </div>
                  </div>
                  <button className="bg-[#aadcd2] text-gray-700 px-3 py-1 rounded-full text-sm">Book now</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorSearch;
import "./index.css";
// import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

// Landing Page imports
import Base from './base';
import Register from './register';
import Login from './login';

// Doctor imports
import DoctorSignUp from "./doctor/signup";
import DoctorLogin from "./doctor/login";

// Patient imports
import PatientSignUp from "./patient/signup";
import PatientLogin from "./patient/login";
import PatientHomePage from "./patient/home";

// Staff imports
import StaffSignUp from "./staff/signup";
import StaffLogin from "./staff/login";

export default function App(){
  return (
    <Router>
      <div>
        <Routes>
          {/* Landing Page Screens and Components */}
          <Route exact path="/" element={<Base />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />

          {/* Patient Screens and Components */}
          <Route exact path="/patient/home" element={<PatientHomePage />} />
          <Route exact path="/patient/signup" element={<PatientSignUp />} />
          <Route exact path="/patient/login" element={<PatientLogin />} />

          {/* Doctor Screens and Components */}
          <Route exact path="/doctor/signup" element={<DoctorSignUp />} />
          <Route exact path="/doctor/login" element={<DoctorLogin />} />

          {/* Staff Screens and Components */}
          <Route exact path="/staff/signup" element={<StaffSignUp />} />
          <Route exact path="/staff/login" element={<StaffLogin />} />

        </Routes>
      </div>
    </Router>
  );
}
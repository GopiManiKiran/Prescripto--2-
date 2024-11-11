import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DoctorList from './components/DoctorList';
import AppointmentForm from './components/AppointmentForm';
import AppointmentDetails from './components/AppointmentDetails';
import Home from './pages/Home'; // Import the Home page
import './App.css';
import Profile from './components/Profile'; 
import Banner from './components/Banner';//Import Profile component

const App = () => {
  const doctors = [
    { id: 1, name: 'Dr. Smith', specialty: 'Cardiologist', photo: '/images/assets/doctors1.png', availability: ['Monday', 'Wednesday', 'Friday'] },
    { id: 2, name: 'Dr. Johnson', specialty: 'Dermatologist', photo: '/images/assets/doctors2.png', availability: ['Tuesday', 'Thursday'] },
    { id: 3, name: 'Dr. Lee', specialty: 'Neurologist', photo: '/images/assets/doctors3.png', availability: ['Monday', 'Friday'] },
    { id: 4, name: 'Dr. Patel', specialty: 'Pediatrician', photo: '/images/assets/doctors4.png', availability: ['Monday', 'Wednesday'] },
    { id: 5, name: 'Dr. Brown', specialty: 'Orthopedist', photo: '/images/assets/doctors5.png', availability: ['Tuesday', 'Friday'] },
    { id: 6, name: 'Dr. Davis', specialty: 'Gynaecologist', photo: '/images/assets/doctors6.png', availability: ['Monday', 'Thursday'] },
    { id: 7, name: 'Dr. Wilson', specialty: 'Psychiatrist', photo: '/images/assets/doctors7.png', availability: ['Tuesday', 'Friday'] },
    { id: 8, name: 'Dr. Taylor', specialty: 'Surgeon', photo: '/images/assets/doctors8.png', availability: ['Wednesday', 'Friday'] },
    { id: 9, name: 'Dr. Harris', specialty: 'Dentist', photo: '/images/assets/doctors9.png', availability: ['Monday', 'Thursday'] },
    { id: 10, name: 'Dr. Clark', specialty: 'Ophthalmologist', photo: '/images/assets/doctors10.png', availability: ['Tuesday', 'Wednesday'] },
    { id: 11, name: 'Dr. Lewis', specialty: 'Endocrinologist', photo: '/images/assets/doctors11.png', availability: ['Monday', 'Friday'] },
    { id: 12, name: 'Dr. Robinson', specialty: 'Gastroenterologist', photo: '/images/assets/doctors12.png', availability: ['Tuesday', 'Thursday'] },
    { id: 13, name: 'Dr. Walker', specialty: 'Nephrologist', photo: '/images/assets/doctors13.png', availability: ['Monday', 'Wednesday'] },
    { id: 14, name: 'Dr. Young', specialty: 'Urologist', photo: '/images/assets/doctors14.png', availability: ['Wednesday', 'Friday'] },
  ];

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointment, setAppointment] = useState(null);

  const handleSelectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleBookAppointment = (appointmentDetails) => {
    setAppointment(appointmentDetails);
    setSelectedDoctor(null); // Reset doctor selection after booking
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h2>DocEase</h2>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/doctorslist">Doctors List</Link></li>
            <li><Link to="/appointments">Appointments</Link></li>
            <li><Link to="/profile">Profile</Link></li> {/* Link to Profile Page */}
          </ul>
        </nav>

        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Doctors List Route */}
          <Route
            path="/doctorslist"
            element={<DoctorList doctors={doctors} onSelectDoctor={handleSelectDoctor} />}
          />

          {/* Appointment Form Route */}
          <Route
            path="/appointments"
            element={
              selectedDoctor ? (
                <AppointmentForm
                  selectedDoctor={selectedDoctor}
                  onBookAppointment={handleBookAppointment}
                />
              ) : (
                <h2>Please select a doctor from the Doctors List</h2>
              )
            }
          />

          {/* Profile Route - Display Profile Component */}
          <Route path="/profile" element={<Profile />} />
        </Routes>

        {/* Show Appointment Details if booked */}
        {appointment && <AppointmentDetails appointment={appointment} />}
      </div>
    </Router>
  );
};

export default App;

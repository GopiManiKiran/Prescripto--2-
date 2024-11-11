import React from 'react';
import './DoctorList.css';

// Import images for each doctor
import doctor1Image from '../assets/doctors1.png';
import doctor2Image from '../assets/doctors2.png';
import doctor3Image from '../assets/doctors3.png';
import doctor4Image from '../assets/doctors4.png';
import doctor5Image from '../assets/doctors5.png';
import doctor6Image from '../assets/doctors6.png';
import doctor7Image from '../assets/doctors7.png';
import doctor8Image from '../assets/doctors8.png';
import doctor9Image from '../assets/doctors9.png';
import doctor10Image from '../assets/doctors10.png';
import doctor11Image from '../assets/doctors11.png';
import doctor12Image from '../assets/doctors12.png';
import doctor13Image from '../assets/doctors13.png';
import doctor14Image from '../assets/doctors14.png';

const DoctorList = ({ doctors, onSelectDoctor }) => {
  return (
    <div className="doctor-list">
      <h2>Doctors List</h2>
      <div className="doctor-cards">
        {doctors.map((doctor) => (
          <div className="doctor-card" key={doctor.id}>
            {/* Display the corresponding image */}
            <img
              src={doctor.photo}
              alt={doctor.name}
              className="doctor-photo"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }} // Optional styling for better image display
            />
            <div className="doctor-info">
              <h3>{doctor.name}</h3>
              <p className="doctor-specialty">Specialty: {doctor.specialty}</p>
              <p className="doctor-availability">
                Availability: {doctor.availability.join(', ')}
              </p>
              <button
                className="book-appointment-btn"
                onClick={() => onSelectDoctor(doctor)}
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;

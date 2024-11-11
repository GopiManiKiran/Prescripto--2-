import React from 'react';
import './AppointmentDetails.css';

const AppointmentDetails = ({ appointment }) => {
  return (
    <div className="appointment-details">
      <h2>Appointment Details</h2>
      {appointment ? (
        <div>
          <p><strong>Doctor:</strong> {appointment.doctor.name}</p>
          <p><strong>Date:</strong> {appointment.date}</p>
          <p><strong>Time:</strong> {appointment.time}</p>
        </div>
      ) : (
        <p>No appointment booked yet.</p>
      )}
    </div>
  );
};

export default AppointmentDetails;

import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = ({ selectedDoctor, onBookAppointment }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookAppointment({ doctor: selectedDoctor, date, time });
  };

  return (
    <div className="appointment-form">
      <h2>Book Appointment with {selectedDoctor.name}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </label>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;

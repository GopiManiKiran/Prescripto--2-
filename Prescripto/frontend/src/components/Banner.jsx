// banner.jsx
import React from 'react';
import './Banner.css';
import bannerImage from '../assets/Book Appointment with Trusted Doctors.png';

const Banner = () => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${bannerImage})` }} // Corrected syntax for using url()
    >
      <div className="banner-content">
        {/* Banner content */}
      </div>
    </div>
  );
};

export default Banner;

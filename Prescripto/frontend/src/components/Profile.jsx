import React from 'react';
import './Profile.css';

// Import image from src/assets
import profileImage from '/images/assets/profile.png'; // Adjust the path based on your folder structure

// Sample user data
const Profile = () => {
  const user = {
    name: 'Ritika',
    address: 'Bandra Road, 14/131A, Mumbai, India',
    phone: '6309455689',
    email: 'ritika9999@gmail.com',
    dob: '06/08/2000',
    occupation: 'Software Developer',
    bio: 'A passionate software developer with experience in web and mobile applications.',
    photo: profileImage, // Use the imported image here
  };

  return (
    <center>
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-image">
            <img src={user.photo} alt="Profile" />
          </div>
          <div className="profile-details">
            <h2>{user.name}</h2>
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Date of Birth:</strong> {user.dob}</p>
            <p><strong>Occupation:</strong> {user.occupation}</p>
            <p><strong>Bio:</strong> {user.bio}</p>
          </div>
        </div>
      </div>
    </center>
  );
};

export default Profile;

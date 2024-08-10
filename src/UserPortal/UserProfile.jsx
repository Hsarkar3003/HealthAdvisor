import './UserPortal.css'
import React from 'react';

const UserProfile = () => {
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        profilePic: 'https://example.com/john-doe-profile-pic.jpg',
      };
  return (
    <div className="user-profile">
      <div className="profile-picture">
        <img src={user.profilePic} alt={user.name} />
      </div>
      <div className="user-details">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </div>
  );
};

export default UserProfile;

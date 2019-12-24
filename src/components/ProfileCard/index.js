import React from 'react';

const ProfileCard = () => {
  return (
    <div className="profile-intro card shadow  border-0 text-left">

      <div >
        <div className="card-image layer">
          <img className="avatar-circle" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="Profile"/>
        </div>
      </div>
      <div className="pi-content">
        <h4>Salman haider</h4>
        <p>Web Developer</p>
        <p className="card-text">Hello everyone, I am Salman.</p>
      </div>
    </div>
  )
};

export default ProfileCard;


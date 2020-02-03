import React from 'react';
import { Link } from 'react-router-dom'

const EmployerProfileCard = () => {
  return (
    <div className="profile-intro card shadow  border-0 text-left">

      <div >
        <img className="avatar-circle" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" aria-hidden alt="Profile" />

      </div>
      <div className="pi-content">
        <Link to='/employerProfile'> <h4>Seven Software development Ltd.</h4></Link>
        <p>Computer Software. Islamabad</p>
      </div>
    </div>
  )
};

export default EmployerProfileCard;


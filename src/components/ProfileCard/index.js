import React from 'react';

const ProfileCard = () => {
  return (
    <div className="profile-intro card shadow  border-0 text-left">
      <div >
        <img className="avatar-circle" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" aria-hidden alt="Profile" />
      
      </div>
      <div className='row'>
        <div className="pi-content">
        <h4 >Salman haider</h4>
        <p>Web Developer</p>
        <p >Hello everyone, I am Salman.</p>
      </div>
      <div className="jr-profile-banner-top-right">
            <ul className="jr-follower-list">
              <li>
                <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">2k+</span>
                <span className="jr-fs-sm">Followers</span></li>
              <li>
                <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">847</span>
                <span className="jr-fs-sm">Following</span></li>
              <li>
                <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">327</span>
                <span className="jr-fs-sm">Connections</span>
              </li>
            </ul>
          </div>
      
      </div>
    </div>
  )
};

export default ProfileCard;


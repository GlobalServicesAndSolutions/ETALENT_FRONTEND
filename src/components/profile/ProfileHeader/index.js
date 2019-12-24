import React from "react";
import Avatar from '@material-ui/core/Avatar';
import { Button } from "@material-ui/core";

const ProfileHeader = ({onEducationView,onSkillView,onCertificationView}) => {
  return (
    <div className="jr-profile-banner">
      <div className="jr-profile-container">
        <div className="jr-profile-banner-top">
          <div className="jr-profile-banner-top-left">
            <div className="jr-profile-banner-avatar">
              <Avatar className="size-90" alt="..." src=""/>
            </div>
            <div className="jr-profile-banner-avatar-info">
              <h2 className="mb-2 jr-mb-sm-3 jr-fs-xxl jr-font-weight-light">Salman Haider</h2>
              <p className="mb-0 jr-fs-lg">Islamabad, Pakistan</p>
            </div>
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
                <span className="jr-fs-sm">Friends</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="jr-profile-banner-bottom">
          <div className="jr-tab-list">
            <ul className="jr-navbar-nav">
              <li>
                <span className="jr-link">About</span>
              </li>
              <li>
                <span className="jr-link" onClick={onEducationView}>Education And Experience</span>
              </li>
              <li>
                <span className="jr-link"onClick={onSkillView}>Skills </span>
              </li>
              <li>
                <span className="jr-link">Awards</span>
              </li>
              <li>
                <span className="jr-link" onClick={onCertificationView}>Certification</span>
              </li>
              <li>
                <span className="jr-link">Contact</span>
              </li>
              <li>
              <Button >Add Sections</Button>
              </li>
            </ul>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader;


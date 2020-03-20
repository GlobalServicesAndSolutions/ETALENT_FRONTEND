import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Widget from "components/Widget";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const ProfileCard = ({onClickAddNewUser}) => {
  return (
    <Widget styleName="jr-card-profile employerProfileHeader">
      <div >
        <div className="jr-profile-container">
          <div className="jr-Dashboardprofile-banner-top">
            <div className="jr-profile-banner-top-left">
              <div className="jr-profile-banner-avatar-info">
                <Avatar className="size-120" alt="..." src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" />
              </div>
              <div className='jr-profile-banner-avatar-info employerDashboardProfileheaderAvatarInfo'>
                <div>
                  <h2 className="mb-2 jr-mb-sm-3 jr-fs-xxl jr-font-weight-black"><Link to='/employerProfile' className='dashboardEmployeeNameColourLink'>Seven Software Development Pvt Ltd.</Link>
                  </h2>
                  <div className='row'>
                    <p className="mb-0 jr-fs-lg">Islamabad, Pakistan</p>
                    <i className={`flag flag-24 flag-pk`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div align='right'>
            <Button color='primary' onClick={onClickAddNewUser}>Create User</Button>
          </div>
        </div>
      </div>
    </Widget>
  )
}

export default ProfileCard;


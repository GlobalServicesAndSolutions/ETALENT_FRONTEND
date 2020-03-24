import React from "react";
import Widget from "components/Widget";

const UserHeader = () => {
  return (
    <Widget styleName="jr-card-profile">
      <div >
        <div className="jr-profile-container ">
          <div className="jr-Dashboardprofile-banner-top">
            <div className="jr-profile-banner-top-left">
                <div>
                  <h2 className="mb-2 jr-mb-sm-3 jr-fs-xxl jr-font-weight-black">User Management</h2>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Widget>
  )
}

export default UserHeader;


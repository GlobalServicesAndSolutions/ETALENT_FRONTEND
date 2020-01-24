import React from "react";
import Avatar from '@material-ui/core/Avatar';

const CandidateDetailHeader = () => {
  return (
    <div className="candidatedetailheader">
      <div className="jr-profile-container">
        <div className="jr-profile-banner-top">
          <div className="jr-profile-banner-top-left">
            <div className="jr-profile-banner-avatar">
              <Avatar className="size-90" alt="..." src="" />
            </div>
            <div className="jr-profile-banner-avatar-info">
              <h2 className="mb-2 jr-mb-sm-3 jr-fs-xxl jr-font-weight-black">Salman Haider</h2>
              <p className="mb-0 jr-fs-lg">Operation Manager, Seven Tech</p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="jr-profile-banner-bottom">
          <div className="jr-tab-list">
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandidateDetailHeader;


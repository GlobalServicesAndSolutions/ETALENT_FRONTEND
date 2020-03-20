import React from "react";
import Widget from "components/Widget";
import { Button } from "@material-ui/core";

const ActiveVendorHeader = () => {
  return (
    <Widget styleName="jr-card-profile activeVendorHeader">
      <div >
        <div className="jr-profile-container ">
          <div className="jr-Dashboardprofile-banner-top">
            <div className="jr-profile-banner-top-left">
                <div>
                  <h2 className="mb-2 jr-mb-sm-3 jr-fs-xxl jr-font-weight-black">Active Vendors</h2>
                    <p className="mb-0 jr-fs-lg">Employer Name</p>
                </div>
            </div>
          </div>
          <div align='right'>
            <Button color='primary' >Load Vendor</Button>
          </div>
        </div>
      </div>
    </Widget>
  )
}

export default ActiveVendorHeader;


import React from "react";
import Widget from "components/Widget";

const AppliedJobs = () => {
  return (
    <div style={{ width: "80%"}} >
      <Widget styleName="jr-card-profile dashboardCardsMaxHeight">
        <div className="mb-3">
          <h3 className="card-title mb-2 mb-md-3">My Submitted Applications
          <sup style={{color:'red'}}>
            (2)
          </sup></h3>
          <br />
          <div>
          <div style={{display:'flex', justifyContent:'space-between'}}>
          <h5>Senior Software Engineer</h5>
          <p style={{color:'red'}}><strong>In Progress</strong></p>
          </div>
          <p style={{color:'gray'}}>Applied 20 days ago</p>
          </div>
          </div>
      </Widget>
    </div>
  )
}


export default AppliedJobs;

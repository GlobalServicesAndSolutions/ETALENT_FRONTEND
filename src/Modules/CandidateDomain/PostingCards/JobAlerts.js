import React from "react";
import Widget from "components/Widget";

const AppliedJobs = () => {
  return (
    <div style={{ width: "80%"}} >
      <Widget styleName="jr-card-profile dashboardCardsMaxHeight">
        <div className="mb-3">
          <h4 className="card-title mb-2 mb-md-3">Submitted Applications
          <sup style={{color:'red'}}>
            (2)
          </sup></h4>
          <br />
          <div style={{lineHeight:'10px'}}>
          <div style={{display:'flex', justifyContent:'space-between'}}>
          <h6>Senior Software Engineer</h6>
          <p className="jr-fs-sm" style={{color:'red'}}><strong>In Progress</strong></p>
          </div>
          <div style={{lineHeight:'6px'}}>
          <p style={{color:'gray'}}>Applied 20 days ago</p>
          <p style={{color:'gray'}}>Location,Country, City</p>
          </div>
          </div>
          </div>
      </Widget>
    </div>
  )
}


export default AppliedJobs;

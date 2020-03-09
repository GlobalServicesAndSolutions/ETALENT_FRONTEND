import React from "react";
import Widget from "components/Widget";
import { Link } from "react-router-dom";

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
           <Link to='/jobDescription'><h5>Senior Software Engineer</h5></Link>
          <div className='row'>
          <p style={{color:'gray'}}>Applied 20 days ago</p>
          &nbsp;
          <div className='vlineForAppliedJobs'></div>
          &nbsp;
          <p style={{color:'gray'}}>Status: In Progress</p>
          </div>
        </div>
      </Widget>
    </div>
  )
}


export default AppliedJobs;

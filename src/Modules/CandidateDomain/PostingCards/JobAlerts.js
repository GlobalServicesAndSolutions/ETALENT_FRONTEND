import React from "react";
import Widget from "components/Widget";

const AppliedJobs = () => {
  return (
    <div style={{ width: "80%" }} >
      <Widget styleName="jr-card-profile" >
        <div className="mb-3">
          <h3 className="card-title mb-2 mb-md-3">Applied Jobs
          &nbsp;
          <sup style={{color:'red'}}>
            (2)
          </sup></h3>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h5>Senior Software Engineer</h5>
            <div>
              <h6 style={{ color: 'red' }}>Closed</h6>
            </div>
          </div>
          <div style={{ color: 'gray' }}>
            <ul>
              <li className="jr-fs-lg">
                Seven Software Development ltd.<br />
                Lahore, Pakistan
            </li>
            </ul>
          </div>
          <hr />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h5>Front End Developer</h5>
            <div>
              <h6 style={{ color: 'red' }}>Open</h6>
            </div>
          </div>
          <div style={{ color: 'gray' }}>
            <ul>
              <li className="jr-fs-lg">
                Global Services and Solutions<br />
                Islamabad, Pakistan
            </li>
            </ul>
          </div>
        </div>
      </Widget>
    </div>
  )
}


export default AppliedJobs;

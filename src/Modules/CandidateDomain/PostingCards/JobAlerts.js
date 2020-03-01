import React from "react";
import Widget from "components/Widget";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  return (
    <div style={{ width: "90%" }} >
      <Widget styleName="jr-card-profile" >
        <div className="mb-3">
          <Link to='/savejobsandalterts'><h3 className="card-title mb-2 mb-md-3">Applied Jobs</h3></Link>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h5 style={{ color: 'gray' }}>Senior Software Engineer</h5>
            <div>
              <h6 style={{ color: 'gray' }}>Closed</h6>
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
            <h5 style={{ color: 'gray' }}>Front End Developer</h5>
            <div>
              <h6 style={{ color: 'gray' }}>Open</h6>
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

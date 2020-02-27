import React from "react";
import Widget from "components/Widget";
import { Link } from "react-router-dom";

const JobAlerts = () => {
  return (
      <div style={{width: "90%"}} >
    <Widget styleName="jr-card-profile" >
      <div className="mb-3">
      <Link to='/savejobsandalterts'><h3 className="card-title mb-2 mb-md-3" style={{color:'gray'}}>Job Alerts</h3></Link>
          <br/>
          <h5>Senior Software Engineer</h5>
        <div>
          <ul>
            <li className="jr-fs-lg">
              Seven Software Development ltd.<br />
              Lahore, Pakistan
            </li>
          </ul>
          </div>
          <hr/>
          <h5>Front End Developer</h5>
        <div>
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


export default JobAlerts;

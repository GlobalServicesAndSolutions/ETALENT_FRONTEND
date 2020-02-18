import React from "react";
import Widget from "components/Widget";

const JobAlerts = () => {
  return (
      <div style={{width: "85%"}} >
    <Widget styleName="jr-card-profile" >
      <div className="mb-3">
      <h3 className="card-title mb-2 mb-md-3">Job Alerts</h3>
          <br/>
          <div className="row">
          <img aria-hidden alt="image" src="example.com" ></img>
          <h4>Senior Software Engineer</h4>
        </div>
        <div>
          <ul>
            <li>
              Seven Software Development ltd.<br />
              Lahore, Pakistan
            </li>
          </ul>
          </div>
          <hr/>
          <div className="row">
          <img aria-hidden alt="image" src="example.com" ></img>
          <h4>Front End Developer</h4>
        </div>
        <div>
          <ul>
            <li>
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

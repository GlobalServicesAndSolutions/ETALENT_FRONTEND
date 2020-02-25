import React from "react";
import Widget from "components/Widget";
import { Link } from "react-router-dom";

const JobPost = () => {
  return (
      <div style={{width: "85%"}} >
    <Widget styleName="jr-card-profile" >
      <div className="mb-3">
      <Link to='/savejobsandalterts'><h3 className="card-title mb-2 mb-md-3" style={{color:'#4341e0'}}>Faveriot Jobs</h3></Link>
          <br/>
          <div className="row">
          <img aria-hidden alt="image" src="example.com" ></img>
          <h5>Senior Software Engineer</h5>
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
          <h5>Front End Developer</h5>
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


export default JobPost;

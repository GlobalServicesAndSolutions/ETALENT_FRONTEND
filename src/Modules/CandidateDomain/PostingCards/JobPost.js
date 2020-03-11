import React from "react";
import Widget from "components/Widget";
import { Link } from "react-router-dom";

const JobPost = () => {
  return (
    <div style={{ width: "80%" }} >
      <Widget styleName="jr-card-profile dashboardCardsMaxHeight" >
        <div className="mb-3">
          <Link to='/savejobsandalterts'><h3 className="card-title mb-2 mb-md-3">Favourite Jobs</h3></Link>
          <br />
          <div>

            <h6>Senior Software Engineer</h6>
          </div>
          <div style={{ color: 'gray' }}>
            <ul>
              <li className="jr-fs-lg">
                <p>Seven Software Development ltd.<br />
                Lahore, Pakistan</p>
            </li>
            </ul>
          </div>
          <hr />
          <div>
            <h6>Front End Developer</h6>
          </div>
          <div style={{ color: 'gray' }}>
            <ul>
              <li className="jr-fs-lg">
               <p> Global Services and Solutions<br />
                Islamabad, Pakistan</p>
            </li>
            </ul>
          </div>
        </div>
      </Widget>
    </div>
  )
}


export default JobPost;

import React from "react";
import Widget from "components/Widget";

const Events = () => {
  return (
      <div style={{width: "80%"}} >
    <Widget styleName="jr-card-profile dashboardCardsMaxHeight" >
      <div className="mb-3">
      <h3 className="card-title mb-2 mb-md-3">Registered Events</h3>
          <br/>
          <h6>Senior Software Engineer</h6>
        <div  style={{color:'gray'}}>
          <ul>
            <li>
              <p>Seven Software Development ltd.<br />
              Lahore, Pakistan</p>
            </li>
          </ul>
          </div>
          <hr/>
          <h6>Front End Developer</h6>
        <div  style={{color:'gray'}}>
          <ul>
            <li>
            <p>Global Services and Solutions<br />
              Islamabad, Pakistan</p>
            </li>
          </ul>
          </div>
        </div>
    </Widget>
    </div>
  )
}


export default Events;

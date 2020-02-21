import React from "react";
import Widget from "components/Widget";
import EventIcon from '@material-ui/icons/Event';
import { Link } from "react-router-dom";

const QuickEvents = () => {
  return (
      <div style={{width: "85%"}} >
    <Widget styleName="jr-card-profile" >
      <div className="mb-3">
      <h3 className="card-title mb-2 mb-md-3" style={{color:'gray'}}>Events</h3>
          <EventIcon fontSize='large'/>
          <Link to='#'>Click here to View events</Link>
        </div>
    </Widget>
    </div>
  )
}


export default QuickEvents;

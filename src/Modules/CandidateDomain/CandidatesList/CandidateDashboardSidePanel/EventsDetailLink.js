import React from "react";
import Widget from "components/Widget";
import EventIcon from '@material-ui/icons/Event';
import { Link } from "react-router-dom";

const QuickEvents = () => {
  return (
      <div style={{width: "65%"}} >
    <Widget styleName="jr-card-profile dashboardQuicklinkcardsStyle" >
      <div>
      <h3 className="card-title mb-2" style={{color:'gray'}}>Events</h3>
      <Link to='/Events'><EventIcon fontSize='large' className='dashboardQuickLinksFont'/></Link>
        </div>
    </Widget>
    </div>
  )
}


export default QuickEvents;

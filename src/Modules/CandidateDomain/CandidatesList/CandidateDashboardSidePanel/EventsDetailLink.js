import React from "react";
import Widget from "components/Widget";
import EventIcon from '@material-ui/icons/Event';
import { Link } from "react-router-dom";

const QuickEvents = () => {
  return (
      <div className='QuickEventsStyle' >
    <Link to='/Events'><Widget styleName='dashboardQuicklinkcardsStyle'>
      <div>
      <h3 className="card-title mb-2" style={{color:'gray'}}>Events</h3>
      <EventIcon fontSize='large' className='dashboardQuickLinksFont'/>
        </div>
    </Widget></Link>
    </div>
  )
}


export default QuickEvents;

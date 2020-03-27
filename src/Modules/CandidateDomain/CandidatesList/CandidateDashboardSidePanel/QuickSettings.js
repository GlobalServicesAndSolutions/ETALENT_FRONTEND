import React from "react";
import Widget from "components/Widget";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { Link } from "react-router-dom";

const QuickSettingsAndEvents = () => {
  return (
      <div className='QuickSettingsAndEventsStyle' >
   <Link to='/savejobsandalterts'> <Widget styleName='dashboardQuicklinkcardsStyle'>
      <div>
      <h3 className="card-title mb-2" style={{color:'gray'}}>Alerts</h3>
      <NotificationsNoneIcon fontSize='large' className='dashboardQuickLinksFont'/>
        </div>
    </Widget></Link>
    </div>
  )
}


export default QuickSettingsAndEvents;

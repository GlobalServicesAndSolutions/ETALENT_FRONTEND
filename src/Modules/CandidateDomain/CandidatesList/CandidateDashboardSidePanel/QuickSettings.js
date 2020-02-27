import React from "react";
import Widget from "components/Widget";
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { Link } from "react-router-dom";

const QuickSettingsAndEvents = () => {
  return (
      <div style={{width: "65%"}} >
    <Widget styleName="jr-card-profile dashboardQuicklinkcardsStyle" >
      <div>
      <h3 className="card-title mb-2" style={{color:'gray'}}>Settings</h3>
      <Link to='#'><NotificationsNoneIcon fontSize='large' className='dashboardQuickLinksFont'/></Link>
        </div>
        <hr/>
        <div className="mb-3">
        <h3 className="card-title mb-2" style={{color:'gray'}}>Alerts</h3>
        <Link to='#'><SettingsIcon fontSize='large' className='dashboardQuickLinksFont'/></Link>
        </div>
    </Widget>
    </div>
  )
}


export default QuickSettingsAndEvents;

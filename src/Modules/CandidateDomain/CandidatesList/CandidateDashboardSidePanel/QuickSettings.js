import React from "react";
import Widget from "components/Widget";
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { Link } from "react-router-dom";

const QuickSettingsAndEvents = () => {
  return (
      <div style={{width: "85%"}} >
    <Widget styleName="jr-card-profile" >
      <div className="mb-3">
      <h3 className="card-title mb-2 mb-md-3" style={{color:'gray'}}>Settings</h3>
          <SettingsIcon fontSize='large'/>
          <Link to='#'>Click here for settings</Link>
        </div>
        <hr/>
        <div className="mb-3">
        <h3 className="card-title mb-2 mb-md-3" style={{color:'gray'}}>Alerts</h3>
          <NotificationsNoneIcon fontSize='large'/>
          <Link to='#'>Click here for alerts</Link>
        </div>
    </Widget>
    </div>
  )
}


export default QuickSettingsAndEvents;

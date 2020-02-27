import React from "react";
import Widget from "components/Widget";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from "react-router-dom";

const QuickFreeLanceProfile = () => {
  return (
      <div style={{width: "65%"}} >
    <Widget styleName="jr-card-profile dashboardQuicklinkcardsStyle" >
      <div>
      <h3 className="card-title mb-2" style={{color:'gray'}}>Freelance Profile</h3>
      <Link to='/profile'> <AccountCircleIcon fontSize='large' className='dashboardQuickLinksFont'/></Link>
        </div>
    </Widget>
    </div>
  )
}


export default QuickFreeLanceProfile;

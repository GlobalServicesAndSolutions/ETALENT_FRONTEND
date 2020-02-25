import React from "react";
import Widget from "components/Widget";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from "react-router-dom";

const QuickFreeLanceProfile = () => {
  return (
      <div style={{width: "85%"}} >
    <Widget styleName="jr-card-profile" >
      <div className="mb-3">
      <h3 className="card-title mb-2 mb-md-3" style={{color:'gray'}}>Freelance Profile</h3>
          <AccountCircleIcon fontSize='large'/>
          <Link to='/profile'>Click here to View Freelance Profile</Link>
        </div>
    </Widget>
    </div>
  )
}


export default QuickFreeLanceProfile;

import React from "react";
import Widget from "components/Widget";
import PersonIcon from '@material-ui/icons/Person';
import { Link } from "react-router-dom";

const QuickProfile = () => {
  return (
      <div style={{width: "85%"}} >
    <Widget styleName="jr-card-profile" >
      <div className="mb-3">
      <h3 className="card-title mb-2 mb-md-3" style={{color:'gray'}}>Profile</h3>
          <PersonIcon fontSize='large'/>
          <Link to='/profile'>Click here to View Profile</Link>
        </div>
    </Widget>
    </div>
  )
}


export default QuickProfile;

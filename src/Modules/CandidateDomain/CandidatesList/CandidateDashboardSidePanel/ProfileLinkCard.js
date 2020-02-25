import React from "react";
import Widget from "components/Widget";
import PersonIcon from '@material-ui/icons/Person';
import { Link } from "react-router-dom";

const QuickProfile = () => {
  return (
      <div style={{width: "65%"}}>
    <Widget styleName="jr-card-profile dashboardQuicklinkcardsStyle" >
      <div >
      <h3 className="card-title mb-2" style={{color:'gray'}}>Profile</h3>
      <Link to='/profile'> <PersonIcon className='dashboardQuickLinksFont'/></Link>
        </div>
    </Widget>
    </div>
  )
}


export default QuickProfile;

import React from "react";
import Widget from "components/Widget";
import PersonIcon from '@material-ui/icons/Person';
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const QuickProfile = () => {
  return (
      <div style={{width: "65%"}}>
    <Widget styleName='dashboardQuicklinkcardsStyle'>
      <div >
      <h3 className="card-title mb-2" style={{color:'gray'}}>Profile</h3>
      <Link to='/profile'> <PersonIcon fontSize='large' className='dashboardQuickLinksFont'/></Link>
        </div>
        <hr/>
        <div>
      <h3 className="card-title mb-2" style={{color:'gray'}}>Freelance Profile</h3>
      <Link to='/profile'> <AccountCircleIcon align='center' fontSize='large' className='dashboardQuickLinksFont'/></Link>
        </div>
    </Widget>
    </div>
  )
}


export default QuickProfile;

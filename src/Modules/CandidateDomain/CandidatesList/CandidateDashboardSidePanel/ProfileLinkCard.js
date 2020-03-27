import React from "react";
import Widget from "components/Widget";
import PersonIcon from '@material-ui/icons/Person';
import { Link } from "react-router-dom";

const QuickProfile = () => {
  return (
      <div className='QuickProfileStyle'>
   <Link to='/profile'> <Widget styleName='dashboardQuicklinkcardsStyle'>
      <div >
      <h3 className="card-title mb-2" style={{color:'gray'}}>Profile</h3>
      <PersonIcon fontSize='large' className='dashboardQuickLinksFont'/>
        </div>
    </Widget></Link>
    </div>
  )
}


export default QuickProfile;

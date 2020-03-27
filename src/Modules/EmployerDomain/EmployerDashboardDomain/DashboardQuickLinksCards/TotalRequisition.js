import React from "react";
import Widget from "components/Widget";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Link } from "react-router-dom";

const TotalRequisitionCard = () => {
  return (
    <div>
      <div className='employerDashboardRequsitionStyle'>
        <Link to='#'> <Widget styleName='employerDashboardCardsBorder'>
          <div className='employerDashboardQuickCards'>
            <h3 className="card-title mb-2 " style={{ color: 'gray' }}>Requestions</h3>
            <LockOpenIcon fontSize='large' className='dashboardQuickLinksFont' />
          </div>
        </Widget></Link>
      </div>
      <div className="ribbon ribbon-top-right"><span>30</span></div>
    </div>
  )
}


export default TotalRequisitionCard;

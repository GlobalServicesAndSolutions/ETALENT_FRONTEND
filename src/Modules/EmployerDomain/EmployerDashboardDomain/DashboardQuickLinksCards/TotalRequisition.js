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
            <h3 className="card-title mb-2 " style={{ color: 'gray' }}>Open requestions</h3>
            <Link to='#'><LockOpenIcon fontSize='large' className='dashboardQuickLinksFont' /></Link>
          </div>
        </Widget></Link>
      </div>
      <div class="ribbon ribbon-top-right"><span>30</span></div>
    </div>
  )
}


export default TotalRequisitionCard;

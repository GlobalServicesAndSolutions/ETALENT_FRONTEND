import React from "react";
import Widget from "components/Widget";
import PeopleIcon from '@material-ui/icons/People';
import { Link } from "react-router-dom";

const TotalVendors = () => {
  return (
    <div>
      <div className='employerDashboardRequsitionStyle'>
        <Link to='#'> <Widget styleName='employerDashboardCardsBorder'>
          <div className='employerDashboardQuickCards'>
            <h3 className="card-title mb-2 " style={{ color: 'gray' }}>Vendors</h3>
            <PeopleIcon fontSize='large' className='dashboardQuickLinksFont' />
          </div>
        </Widget></Link>
      </div>
      <div className="ribbon ribbon-top-right"><span>10</span></div>
    </div>
  )
}


export default TotalVendors;

import React from "react";
import Widget from "components/Widget";
import PersonIcon from '@material-ui/icons/Person';
import { Link } from "react-router-dom";

const OfferLetters = () => {
  return (
    <div>
      <div className='employerDashboardOfferLatter'>
        <Link to='#'> <Widget styleName='employerDashboardCardsBorder'>
          <div className='employerDashboardQuickCards'>
            <h3 className="card-title mb-2 " style={{ color: 'gray' }}>Offer Letters</h3>
            <Link to='#'> <PersonIcon fontSize='large' className='dashboardQuickLinksFont' /></Link>
          </div>
        </Widget></Link>
      </div>
      <div class="ribbon ribbon-top-right"><span>300</span></div>
    </div>
  )
}


export default OfferLetters;

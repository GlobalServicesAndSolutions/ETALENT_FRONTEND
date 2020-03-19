import React from "react";
import Widget from "components/Widget";
import BeenhereIcon from '@material-ui/icons/Beenhere';
import { Link } from "react-router-dom";

const AppliedCandidates = () => {
  return (
    <div>
      <div className='employerDashboardAppliedCandidates'>
        <Link to='#'> <Widget styleName='employerDashboardCardsBorder'>
          <div className='employerDashboardQuickCards'>
            <h3 className="card-title mb-2 " style={{ color: 'gray' }}>Applied Candidates</h3>
            <Link to='#'> <BeenhereIcon fontSize='large' className='dashboardQuickLinksFont' /></Link>
          </div>
        </Widget></Link>
      </div>
      <div class="ribbon ribbon-top-right"><span>90</span></div>
    </div>
  )
}


export default AppliedCandidates;

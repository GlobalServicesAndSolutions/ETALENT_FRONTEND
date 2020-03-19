import React from "react";
import Widget from "components/Widget";
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import { Link } from "react-router-dom";

const RejectedCandidates = () => {
  return (
    <div>
      <div className='employerDashboardRejectedcandidates'>
        <Link to='#'> <Widget styleName='employerDashboardCardsBorder'>
          <div className='employerDashboardQuickCards'>
            <h3 className="card-title mb-2 " style={{ color: 'gray' }}>Rejected Candidates</h3>
            <Link to='#'> <PersonAddDisabledIcon fontSize='large' className='dashboardQuickLinksFont' /></Link>
          </div>
        </Widget></Link>
      </div>
      <div class="ribbon ribbon-top-right"><span>68</span></div>
    </div>
  )
}


export default RejectedCandidates;

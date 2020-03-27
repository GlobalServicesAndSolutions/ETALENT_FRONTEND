import React from "react";
import Widget from "components/Widget";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { Link } from "react-router-dom";

const HiredCandidates = () => {
  return (
    <div>
      <div className='employerDashboardHiredCandidates'>
        <Link to='#'> <Widget styleName='employerDashboardCardsBorder'>
          <div className='employerDashboardQuickCards'>
            <h3 className="card-title mb-2 " style={{ color: 'gray' }}>Hired Candidates</h3>
            <DoneOutlineIcon fontSize='large' className='dashboardQuickLinksFont' />
          </div>
        </Widget></Link>
      </div>
      <div className="ribbon ribbon-top-right"><span>50</span></div>
    </div>
  )
}


export default HiredCandidates;

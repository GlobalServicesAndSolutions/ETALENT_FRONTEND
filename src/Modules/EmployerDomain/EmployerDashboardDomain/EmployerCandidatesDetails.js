import React from "react";
import Widget from "components/Widget";

const EmployerCandidatesDetail = () => {
    return (
        <Widget styleName="jr-card-profile employerDashboardGraphCardMargin">
            <div className="mb-3">
                <h3 className="card-title mb-2 mb-md-3">Operational Manager</h3>
                <hr />
                <p><strong>Total Candidates: 4</strong></p>
                <p><strong>Stages</strong></p>
                <div className='row employerDashboardSmallCardsMargin'>
                <div className='employerDashboardSmallCardWidth'>
                <Widget styleName="jr-card-profile EmployerDashboardSmallcard employerStageHired">
                <h3 className="card-title EmployerDashboardSmallCardsTilte">Hired</h3>
                </Widget>
                </div>
                <div className='employerDashboardSmallCardWidth'>
                <Widget styleName="jr-card-profile EmployerDashboardSmallcard employerStageBackgroundCheck">
                <h3 className="card-title EmployerDashboardSmallCardsTilte">Background Check</h3>
                </Widget>
                </div><div className='employerDashboardSmallCardWidth'>
                <Widget styleName="jr-card-profile EmployerDashboardSmallcard employerStageNewApplication">
                <h3 className="card-title EmployerDashboardSmallCardsTilte">New Application</h3>
                </Widget>
                </div><div className='employerDashboardSmallCardWidth'>
                <Widget styleName="jr-card-profile EmployerDashboardSmallcard employerStageReadyToApply">
                <h3 className="card-title EmployerDashboardSmallCardsTilte">Ready To Apply</h3>
                </Widget>
                </div><div className='employerDashboardSmallCardWidth'>
                <Widget styleName="jr-card-profile EmployerDashboardSmallcard employerStageAssesment">
                <h3 className="card-title EmployerDashboardSmallCardsTilte">Assesment</h3>
                </Widget>
                </div>
                <div className='employerDashboardSmallCardWidth'>
                <Widget styleName="jr-card-profile EmployerDashboardSmallcard employerStageReadyForHired">
                <h3 className="card-title EmployerDashboardSmallCardsTilte">Ready for Hired</h3>
                </Widget>
                </div>
                <div className='employerDashboardSmallCardWidth'>
                <Widget styleName="jr-card-profile EmployerDashboardSmallcard employerStageOffers">
                <h3 className="card-title EmployerDashboardSmallCardsTilte">Offers</h3>
                </Widget>
                </div>
                <div className='employerDashboardSmallCardWidth'>
                <Widget styleName="jr-card-profile EmployerDashboardSmallcard employerStageShortList">
                <h3 className="card-title EmployerDashboardSmallCardsTilte">ShortList</h3>
                </Widget>
                </div>
                <div className='employerDashboardSmallCardWidth'>
                <Widget styleName="jr-card-profile EmployerDashboardSmallcard employerStageInterView">
                <h3 className="card-title EmployerDashboardSmallCardsTilte">InterView</h3>
                </Widget>
                </div>
                </div>
            </div>
        </Widget>
    )
}


export default EmployerCandidatesDetail;

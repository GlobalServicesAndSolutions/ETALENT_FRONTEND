import React from "react";
import Widget from "components/Widget";


const EmployerCandidatesDetail = () => {
    return (
        <Widget styleName="jr-card-profile employerDashboardGraphCardMargin">
            <div className="mb-3">
            <h3 className="card-title mb-2 mb-md-3">Candidates</h3>
            <hr/>
            <h5>Operational Manager</h5>
            <br/>
            <p>Total Candidates.</p>
            Stages
            </div>
            <div class="ribbon ribbon-top-right ribbon-top-right-candidates"><span>50</span></div>
        </Widget>
    )
}


export default EmployerCandidatesDetail;

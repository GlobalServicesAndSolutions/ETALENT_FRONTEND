import React from "react";
import Widget from "components/Widget";

const EmployerSectionThreeReview = ({
    data,
}) => {
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
                <div>
                    <h3 className="card-title mb-2 mb-md-3">Organizational Information</h3>
                </div>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <td><th>Legal Entity</th></td>
                            <td> : {data.legalEntity}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Industry</th></td>
                            <td> : {data.industry}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Department</th></td>
                            <td> : {data.depatment}</td>
                        </tr>
                        <tr>
                           <td><th>Devision</th></td>
                            <td> : {data.division}</td>
                        </tr>
                        <hr/>
                        <tr>
                        <td><th><strong>Organization Address</strong></th></td>
                        </tr>
                        <tr>
                            <td><th>House or flat No.</th></td>
                            <td> : {data.organizationHouseNo}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><th>Country</th></td>
                            <td> : {data.organizationCountry}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><th>City</th></td>
                            <td> : {data.organizationCity}</td>
                        </tr>
                        <tr>
                            <td><th>Province</th></td>
                            <td> : {data.organizationProvince}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><th>Zip Code</th></td>
                            <td> : {data.organizationZipCode}</td>
                        </tr>
                        <hr/>
                        <tr>
                            <td><th>Job Justification</th></td>
                            <td> : {data.jobJustification}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><th>Position Number</th></td>
                            <td> : {data.positionNumber}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><th>Cost Center Id</th></td>
                            <td> : {data.costCenterId}</td>
                        </tr>
                        <tr>
                            <td><th>Reason For Vacancy</th></td>
                            <td> : {data.reasonForVacancy}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><th>Replace For Whom</th></td>
                            <td> : {data.replacementForWhom}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><th>Requirement Justification</th></td>
                            <td> : {data.requirementJustification}</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </Widget>
    )
}


export default EmployerSectionThreeReview;

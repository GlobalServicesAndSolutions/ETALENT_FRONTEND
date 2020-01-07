import React from "react";
import Widget from "components/Widget";

const EmployerSectionTwoReview = ({
    data

}) => {
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
                <div>
                    <h3 className="card-title mb-2 mb-md-3">Job Details</h3>
                </div>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <td><th>Job Code</th></td>
                            <td> : {data.jobCode}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Job Start Date</th></td>
                            <td> : {data.selectedStartDate}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Job End Date</th></td>
                            <td> : {data.selectedEndDate}</td>
                        </tr>
                        <tr>
                            <td><th>Job Role</th></td>
                            <td> : {data.jobRole}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><th>Job Level</th></td>
                            <td> : {data.jobLevel}</td>
                        </tr>
                        <tr>
                            <td><th>Job Status</th></td>
                            <td> : {data.jobStatusvalue}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><th>Job Function</th></td>
                            <td> : {data.jobFunctionvalue}</td>
                        </tr>
                        <tr>
                            <td><th>Required Travel</th></td>
                            <td> : {data.travelRequiredValue}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><th>Required Education</th></td>
                            <td> : {data.requiredEducation}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><th>Required Experience</th></td>
                            <td> : {data.requiredExperience}</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </Widget>
    )
}


export default EmployerSectionTwoReview;

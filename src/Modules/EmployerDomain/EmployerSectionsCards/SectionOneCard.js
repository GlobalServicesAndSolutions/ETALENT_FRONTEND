import React from "react";
import Widget from "components/Widget";

const EmployerSectionOneReview = ({
    externalJobTitle,
    internalJobTitle,
    jobStatus,
    noOfOpenings,
    jobSummary,
    houseNo,
    streetNo,
    country,
    city,
    province,
    zipCode,
    targetCountry,
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    softSkill1,
    softSkill2,
    softSkill3,
    softSkill4,
    softSkill5,
    jobCreatedDate,
    jobChangeDate,
    jobCreatedBy,
    jobChangeBy
}) => {
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
                <div>
                    <h3 className="card-title mb-2 mb-md-3">Basic Information</h3>
                </div>
                <hr />
                <table>
                    <tbody>
                    <tr>
                        <td><th>External job title : </th></td>
                        <td>{externalJobTitle}</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Internal job title : </th></td>
                        <td>{internalJobTitle}</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>job Status : </th></td>
                        <td>{jobStatus}</td>
                    </tr>
                    <tr>
                        <td><th>No. of openings : </th></td>
                        <td>{noOfOpenings}</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Job Summary : </th></td>
                        <td>{jobSummary}</td>
                    </tr>
                    <hr />
                    <tr>
                        <td><th><strong>Address</strong></th></td>
                    </tr>
                    <tr>
                        <td><th>House or flat No. : </th></td>
                        <td>{houseNo}</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Street : </th></td>
                        <td>{streetNo}</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Country : </th></td>
                        <td>{country}</td>
                    </tr>
                    <tr>
                        <td><th>City : </th></td>
                        <td>{city}</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Province or state : </th></td>
                        <td>{province}</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Zip Code : </th></td>
                        <td>{zipCode}</td>
                    </tr>
                    <tr>
                        <td><th>Target Country</th></td>
                        <td>{targetCountry}</td>
                    </tr>
                    <hr />
                    <tr>
                        <td><th><strong>Skills</strong></th></td>
                    </tr>
                    <tr>
                        <td><th>1 : </th></td>
                        <td>{skill1}</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>2 : </th></td>
                        <td>{skill2}</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>3 : </th></td>
                        <td>{skill3}</td>
                    </tr>
                    <tr>
                        <td><th>4 : </th></td>
                        <td>{skill4}</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>5 : </th></td>
                        <td>{skill5}</td>
                    </tr>
                    <hr />
                    <tr>
                        <td><th><strong>Soft Skills</strong></th></td>
                    </tr>
                    <tr>
                        <td><th>1 : </th></td>
                        <td>{softSkill1}</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>2 : </th></td>
                        <td>{softSkill2}</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>3 : </th></td>
                        <td>{softSkill3}</td>
                    </tr>
                    <tr>
                        <td><th>4 : </th></td>
                        <td>{softSkill4}</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>5 : </th></td>
                        <td>{softSkill5}</td>
                    </tr>
                    <hr />
                    <tr>
                        <td><th>Job created by : </th></td>
                        <td>{jobCreatedBy}</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Job change by : </th></td>
                        <td>{jobChangeBy}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Widget>
    )
}


export default EmployerSectionOneReview;

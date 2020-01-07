import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const EmployerSectionOneReview = ({
    data,
    onEditSectionOne
}) => {
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
                <div className="cardHeaderAndAddButton" >
                    <div>
                        <h3 className="card-title mb-2 mb-md-3">Basic Information</h3>
                    </div>
                    <div>
                        <Fab size="small" color="primary" aria-label="delete" onClick={onEditSectionOne}>
                            <EditIcon />
                        </Fab>
                        <IconButton aria-label="delete" color="primary">
                            <DeleteIcon fontSize="large" />
                        </IconButton>
                    </div>
                </div>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <td><th>External job title : </th></td>
                            <td>{data.externalJobTitle}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Internal job title : </th></td>
                            <td>{data.internalJobTitle}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>job Status : </th></td>
                            <td>{data.jobStatus}</td>
                        </tr>
                        <tr>
                            <td><th>No. of openings : </th></td>
                            <td>{data.numberOfOpenings}</td>
                        </tr>
                        <hr />
                        <div>
                            <tr>
                                <td><th>Job Summary : </th></td>
                                <td>{data.jobSummary}</td>
                            </tr>
                        </div>
                        <hr />
                        <tr>
                            <td><th><strong>Address</strong></th></td>
                        </tr>
                        <tr>
                            <td><th>House or flat No. : </th></td>
                            <td>{data.houseNo}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Street : </th></td>
                            <td>{data.streetNo}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Country : </th></td>
                            <td>{data.country}</td>
                        </tr>
                        <tr>
                            <td><th>City : </th></td>
                            <td>{data.city}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Province or state : </th></td>
                            <td>{data.province}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Zip Code : </th></td>
                            <td>{data.zipCode}</td>
                        </tr>
                        <tr>
                            <td><th>Target Country</th></td>
                            <td>{data.targetCountry}</td>
                        </tr>
                        <hr />
                        <tr>
                            <td><th><strong>Skills</strong></th></td>
                        </tr>
                        <tr>
                            <td><th>1 : </th></td>
                            <td>{data.kill1}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>2 : </th></td>
                            <td>{data.skill2}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>3 : </th></td>
                            <td>{data.skill3}</td>
                        </tr>
                        <tr>
                            <td><th>4 : </th></td>
                            <td>{data.skill4}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>5 : </th></td>
                            <td>{data.skill5}</td>
                        </tr>
                        <hr />
                        <tr>
                            <td><th><strong>Soft Skills</strong></th></td>
                        </tr>
                        <tr>
                            <td><th>1 : </th></td>
                            <td>{data.softSkill1}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>2 : </th></td>
                            <td>{data.softSkill2}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>3 : </th></td>
                            <td>{data.softSkill3}</td>
                        </tr>
                        <tr>
                            <td><th>4 : </th></td>
                            <td>{data.softSkill4}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>5 : </th></td>
                            <td>{data.softSkill5}</td>
                        </tr>
                        <hr />
                        <tr>
                            <td><th>Job created Date : </th></td>
                            <td>{data.jobCreatedDate}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Job change Date : </th></td>
                            <td>{data.changeDateSelected}</td>
                        </tr>
                        <tr>
                            <td><th>Job created by : </th></td>
                            <td>{data.createdBy}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Job change by : </th></td>
                            <td>{data.changeBy}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Widget>
    )
}


export default EmployerSectionOneReview;

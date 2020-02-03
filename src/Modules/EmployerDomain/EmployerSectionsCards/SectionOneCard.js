import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";

const EmployerSectionOneReview = ({
    data,
    onEditSectionOne,
    onDeleteSectionOne,
    isEdit,
}) => {
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
                <div className="cardHeaderAndAddButton" >
                    <div>
                        <h3 className="card-title mb-2 mb-md-3">Basic Information</h3>
                    </div>
                    <div>
                        {isEdit &&
                        
                        <Link 
                        to={{
                            pathname: '/employerWorkflow',
                            state: { isEditjob:true }
                          }}>
                            <Fab size="small" color="primary" aria-label="edit" >
                            <EditIcon />
                        </Fab>
                        </Link>}
                        {!isEdit &&
                        <Fab size="small" color="primary" aria-label="edit" onClick={onEditSectionOne}>
                            <EditIcon />
                        </Fab>}
                        {!isEdit &&
                        <IconButton aria-label="delete" color="primary" onClick={onDeleteSectionOne}>
                            <DeleteIcon fontSize="large" />
                        </IconButton>
                        }
                    </div>
                </div>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <th>External job title : </th>
                            <td>{data.externalJobTitle}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>Internal job title : </th>
                            <td>{data.internalJobTitle}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>job Status : </th>
                            <td>{data.jobStatus}</td>
                        </tr>
                        <tr>
                            <th>No. of openings : </th>
                            <td>{data.numberOfOpenings}</td>
                        </tr>
                        <hr />
                        <div>
                            <tr>
                                <th>Job Summary : </th>
                                <td>{data.jobSummary}</td>
                            </tr>
                        </div>
                        <hr />
                        <tr>
                            <th><strong>Address</strong></th>
                        </tr>
                        <tr>
                            <th>House or flat No. : </th>
                            <td>{data.houseNo}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>Street : </th>
                            <td>{data.streetNo}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>Country : </th>
                            <td>{data.country}</td>
                        </tr>
                        <tr>
                            <th>City : </th>
                            <td>{data.city}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>Province or state : </th>
                            <td>{data.province}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>Zip Code : </th>
                            <td>{data.zipCode}</td>
                        </tr>
                        <tr>
                            <th>Target Country</th>
                            <td>{data.targetCountry}</td>
                        </tr>
                        <hr />
                        <tr>
                            <th><strong>Skills</strong></th>
                        </tr>
                        <tr>
                            <th>1 : </th>
                            <td>{data.kill1}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>2 : </th>
                            <td>{data.skill2}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>3 : </th>
                            <td>{data.skill3}</td>
                        </tr>
                        <tr>
                            <th>4 : </th>
                            <td>{data.skill4}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>5 : </th>
                            <td>{data.skill5}</td>
                        </tr>
                        <hr />
                        <tr>
                            <th><strong>Soft Skills</strong></th>
                        </tr>
                        <tr>
                            <th>1 : </th>
                            <td>{data.softSkill1}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>2 : </th>
                            <td>{data.softSkill2}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>3 : </th>
                            <td>{data.softSkill3}</td>
                        </tr>
                        <tr>
                            <th>4 : </th>
                            <td>{data.softSkill4}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>5 : </th>
                            <td>{data.softSkill5}</td>
                        </tr>
                        <hr />
                        <tr>
                            <th>Job created Date : </th>
                            <td>{data.jobCreatedDate}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>Job change Date : </th>
                            <td>{data.changeDateSelected}</td>
                        </tr>
                        <tr>
                            <th>Job created by : </th>
                            <td>{data.createdBy}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>Job change by : </th>
                            <td>{data.changeBy}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Widget>
    )
}


export default EmployerSectionOneReview;

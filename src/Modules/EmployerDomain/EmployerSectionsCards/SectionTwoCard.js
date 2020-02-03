import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';
const EmployerSectionTwoReview = ({
    data,
    onEditSectionTwo,
    onDeleteSectionTwo,
    isEdit
}) => {
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
            <div className="cardHeaderAndAddButton" >
                    <div>
                        <h3 className="card-title mb-2 mb-md-3">Job Details</h3>
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
                        <Fab size="small" color="primary" aria-label="delete" onClick={onEditSectionTwo}>
                            <EditIcon />
                        </Fab>}
                        {!isEdit &&
                        <IconButton aria-label="delete" color="primary" onClick={onDeleteSectionTwo}>
                            <DeleteIcon fontSize="large" />
                        </IconButton>
                        }
                    </div>
                </div>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <th>Job Code</th>
                            <td> : {data.jobCode}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>Job Start Date</th>
                            <td> : {data.selectedStartDate}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>Job End Date</th>
                            <td> : {data.selectedEndDate}</td>
                        </tr>
                        <tr>
                            <th>Job Role</th>
                            <td> : {data.jobRole}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Job Level</th>
                            <td> : {data.jobLevel}</td>
                        </tr>
                        <tr>
                            <th>Job Status</th>
                            <td> : {data.jobStatusvalue}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Job Function</th>
                            <td> : {data.jobFunctionvalue}</td>
                        </tr>
                        <tr>
                            <th>Required Travel</th>
                            <td> : {data.travelRequiredValue}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Required Education</th>
                            <td> : {data.requiredEducation}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Required Experience</th>
                            <td> : {data.requiredExperience}</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </Widget>
    )
}


export default EmployerSectionTwoReview;

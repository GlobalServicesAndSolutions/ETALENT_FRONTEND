import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
const EmployerSectionTwoReview = ({
    data,
    onEditSectionTwo,
    onDeleteSectionTwo
}) => {
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
            <div className="cardHeaderAndAddButton" >
                    <div>
                        <h3 className="card-title mb-2 mb-md-3">Job Details</h3>
                    </div>
                    <div>
                        <Fab size="small" color="primary" aria-label="delete" onClick={onEditSectionTwo}>
                            <EditIcon />
                        </Fab>
                        <IconButton aria-label="delete" color="primary" onClick={onDeleteSectionTwo}>
                            <DeleteIcon fontSize="large" />
                        </IconButton>
                    </div>
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

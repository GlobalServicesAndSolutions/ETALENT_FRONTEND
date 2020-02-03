import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';

const EmployerSectionSixReview = ({
    data,
    onEditSectionSix,
    onDeleteSectionSix,
    isEdit
}) => {
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
            <div className="cardHeaderAndAddButton" >
                    <div>
                        <h3 className="card-title mb-2 mb-md-3">Requisition Teamn</h3>
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
                        <Fab size="small" color="primary" aria-label="delete" onClick={onEditSectionSix}>
                            <EditIcon />
                        </Fab>}
                        {!isEdit &&
                        <IconButton aria-label="delete" color="primary" onClick={onDeleteSectionSix}>
                            <DeleteIcon fontSize="large" />
                        </IconButton>
                        }
                    </div>
                </div>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <th>Hiring Manager</th>
                            <td> : {data.hiringManager}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Recruiter</th>
                            <td> : {data.recruiter}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Target Recruiter/Agents</th>
                            <td> : {data.targetRecruiters}</td>
                        </tr>
                        <tr>
                            <th>Recruitment Coordinator</th>
                            <td> : {data.recruitementCoordinator}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Human Resource Administrator</th>
                            <td> : {data.humanResourceAdministrator}</td>
                            <th>Pay type </th>
                            <td> : {data.payType}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Widget>
    )
}


export default EmployerSectionSixReview;

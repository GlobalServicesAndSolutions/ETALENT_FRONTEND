import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';

const EmployerSectionThreeReview = ({
    data,
    onEditSectionThree,
    onDeleteSectionThree,
    isEdit
}) => {
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
            <div className="cardHeaderAndAddButton" >
                    <div>
                        <h3 className="card-title mb-2 mb-md-3">Organizational Information</h3>
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
                        <Fab size="small" color="primary" aria-label="delete" onClick={onEditSectionThree}>
                            <EditIcon />
                        </Fab>}
                        {!isEdit &&
                        <IconButton aria-label="delete" color="primary" onClick={onDeleteSectionThree}>
                            <DeleteIcon fontSize="large" />
                        </IconButton>
                        }
                    </div>
                </div>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <th>Legal Entity</th>
                            <td> : {data.legalEntity}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>Industry</th>
                            <td> : {data.industry}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>Department</th>
                            <td> : {data.depatment}</td>
                        </tr>
                        <tr>
                           <th>Devision</th>
                            <td> : {data.division}</td>
                        </tr>
                        <hr/>
                        <tr>
                        <th><strong>Organization Address</strong></th>
                        </tr>
                        <tr>
                            <th>House or flat No.</th>
                            <td> : {data.organizationHouseNo}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Country</th>
                            <td> : {data.organizationCountry}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>City</th>
                            <td> : {data.organizationCity}</td>
                        </tr>
                        <tr>
                            <th>Province</th>
                            <td> : {data.organizationProvince}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Zip Code</th>
                            <td> : {data.organizationZipCode}</td>
                        </tr>
                        <hr/>
                        <tr>
                            <th>Job Justification</th>
                            <td> : {data.jobJustification}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Position Number</th>
                            <td> : {data.positionNumber}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Cost Center Id</th>
                            <td> : {data.costCenterId}</td>
                        </tr>
                        <tr>
                            <th>Reason For Vacancy</th>
                            <td> : {data.reasonForVacancy}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Replace For Whom</th>
                            <td> : {data.replacementForWhom}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Requirement Justification</th>
                            <td> : {data.requirementJustification}</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </Widget>
    )
}


export default EmployerSectionThreeReview;

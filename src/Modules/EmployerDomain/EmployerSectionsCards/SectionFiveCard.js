import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const EmployerSectionFiveReview = ({
    data,
    onEditSectionFive,
    onDeleteSectionFive
}) => {
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
            <div className="cardHeaderAndAddButton" >
                    <div>
                        <h3 className="card-title mb-2 mb-md-3">Full Time Salary and Benefits Information</h3>
                    </div>
                    <div>
                        <Fab size="small" color="primary" aria-label="delete" onClick={onEditSectionFive}>
                            <EditIcon />
                        </Fab>
                        <IconButton aria-label="delete" color="primary" onClick={onDeleteSectionFive}>
                            <DeleteIcon fontSize="large" />
                        </IconButton>
                    </div>
                </div>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <th>Is this a budgeted position</th>
                            <td> : {data.budgetedPositionValue}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Currency</th>
                            <td> : {data.currency}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Base Salary</th>
                            <td> : {data.baseSalary}</td>
                        </tr>
                        <hr/>
                        <tr>
                            <th>Salary Frequency</th>
                            <td> : {data.salaryFrequencyValue}</td>
                        </tr>
                        <hr/>
                        <tr>
                            <th>Employment Type</th>
                            <td> : {data.employmentType}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Job pay grade</th>
                            <td> : {data.jobPayGrade}</td>
                            <th>Pay type </th>
                            <td> : {data.payType}</td>
                        </tr>
                        <tr>
                            <th>Target Bonus Amount</th>
                            <td> : {data.targetBonusAmount}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Stoke Pakage</th>
                            <td> : {data.stokePakage}</td>
                            <th>Commision </th>
                            <td> : {data.commissionValue}</td>
                        </tr>
                        <tr>
                            <th>Motor vehicle</th>
                            <td> : {data.motorVehicleValue}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Accomudation</th>
                            <td> : {data.accomodationValue}</td>
                            <th>Relocation pack</th>
                            <td> : {data.relocationPackValue}</td>
                        </tr>
                        <div>
                        <tr>
                            <th>Comments</th>
                            <td> : {data.comments}</td>
                        </tr>
                        </div>
                    </tbody>
                </table>
            </div>
        </Widget>
    )
}


export default EmployerSectionFiveReview;

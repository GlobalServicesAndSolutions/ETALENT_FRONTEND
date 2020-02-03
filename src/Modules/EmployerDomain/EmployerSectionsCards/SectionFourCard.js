import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';


const EmployerSectionFourReview = ({
    data,
    onEditSectionFour,
    onDeleteSectionFour,
    isEdit
}) => {
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
            <div className="cardHeaderAndAddButton" >
                    <div>
                        <h3 className="card-title mb-2 mb-md-3">Contract Information</h3>
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
                        <Fab size="small" color="primary" aria-label="delete" onClick={onEditSectionFour}>
                            <EditIcon />
                        </Fab>}
                        {!isEdit &&
                        <IconButton aria-label="delete" color="primary" onClick={onDeleteSectionFour}>
                            <DeleteIcon fontSize="large" />
                        </IconButton>
                        }
                    </div>
                </div>
                <hr />
                <table>
                    <tbody>
                        <tr>
                        <th><strong>Duration</strong></th>
                        </tr>
                        <tr>
                            <th>Years</th>
                            <td> : {data.contractYears}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>Months</th>
                            <td> : {data.contractMonth}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>Days</th>
                            <td> : {data.contractDays}</td>
                        </tr>
                        <hr/>
                        <tr>
                            <th>Visa Status</th>
                            <td> : {data.visaStatusvalue}</td>
                        </tr>
                        <hr/>
                        <tr>
                            <th>Bill Rate Currency</th>
                            <td> : {data.billRateCurrency}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Bill Rate</th>
                            <td> : {data.billRate}</td>
                        </tr>
                        <hr/>
                       <tr>
                        <th><strong>Commute</strong></th>
                        </tr>
                        <tr>
                            <th>Commute Currency</th>
                            <td> : {data.commuteCurrencyValue}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Commute Ammount</th>
                            <td> : {data.commuteAmountValue}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Widget>
    )
}


export default EmployerSectionFourReview;
